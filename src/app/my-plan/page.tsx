import SelectedPlanList from '@/Components/my-plan-files/SelectedPlanList';
import React from 'react';

const page = () => {
    return (
        <div className='container mx-auto mt-16 space-y-8'>
            <div>
                <h1 className='text-3xl font-bold'>MY PLAN</h1>
                <p className='text-sm font-light'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>



            <div className='grid grid-cols-3  bg-black/20 p-8 rounded-2xl'>

                <div className='flex flex-col justify-start '>
                    <h2 className='text-sm font-light text-gray-400 '>Excersice</h2>
                    <h1 className='text-5xl font-bold text-lime-500'>2</h1>
                </div>


                <div className='flex flex-col justify-start border-l border-gray-700/60 pl-6'>
                    <h2 className='text-sm font-light text-gray-400'>Minutes</h2>
                    <h1 className='text-5xl font-bold'>23</h1>
                </div>


                <div className='flex flex-col items-start border-l border-gray-700/60 pl-6'>
                    <h2 className='text-sm font-light text-gray-400'>Calories</h2>
                    <h1 className='text-5xl font-bold'>190</h1>
                </div>

            </div>




            <SelectedPlanList/>
        </div>
    );
};

export default page;