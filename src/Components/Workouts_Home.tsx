import React from 'react';
import WorksoutCard from './WorksoutCard';
import { IFit } from '@/Types/FitTypes';

const FitResponse = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog', { cache: "no-store" });

    return res.json();
}

const Workouts_Home = async () => {

    const fitData = await FitResponse();

    return (
        <section id='library' className='container mx-auto px-4 sm:px-6 mt-10 sm:mt-14 scroll-mt-20'>
            <div className='pb-6 sm:pb-8'>
                <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight'>THE LIBRARY</h2>
                <p className='mt-1 text-sm sm:text-base text-muted font-light'>Twelve lifts covering every major muscle group.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {
                    fitData.map((item: IFit) => (
                        <WorksoutCard key={item.id} item={item} />
                    ))
                }
            </div>
        </section>
    );
};

export default Workouts_Home;
