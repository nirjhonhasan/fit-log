import React from 'react';
import WorksoutCard from './WorksoutCard';
import { IFit } from '@/Types/FitTypes';



const FitResponse = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');

    return res.json();
}



const Workouts_Home = async () => {

    const fitData = await FitResponse();

    return (
        <div className='container mx-auto mt-6 pt-4'>
            <div className='py-8'>
                <h1 className='text-5xl font-bold'>THE LIBRARY</h1>
                <p className='text-md text-gray-500 font-light'>Twelve lifts covering every major muscle group.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    fitData.map((item:IFit) => {
                        return <div key={item.id}>
                            <WorksoutCard item ={item}/>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Workouts_Home;