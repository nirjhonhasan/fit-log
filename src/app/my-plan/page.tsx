import Calories from '@/Components/my-plan-componant/Calories';
import Excersice from '@/Components/my-plan-componant/Excersice';
import Minutes from '@/Components/my-plan-componant/Minutes';
import SelectedPlanList from '@/Components/my-plan-files/SelectedPlanList';
import React from 'react';

const stat = 'flex flex-col justify-start gap-1 border-t border-line pt-5 first:border-t-0 first:pt-0 sm:border-t-0 sm:border-l sm:pt-0 sm:px-6 sm:first:pl-0 sm:first:border-l-0';

const page = () => {
    return (
        <div className='page-shell px-4 sm:px-6 mt-8 sm:mt-12 space-y-6 sm:space-y-8 pb-8'>
            <div>
                <h1 className='text-3xl sm:text-4xl font-black tracking-tight'>MY PLAN</h1>
                <p className='mt-1 text-sm text-muted font-light'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 bg-surface border border-line p-5 sm:p-8 gap-5 sm:gap-0 rounded-2xl'>
                <div className={stat}>
                    <h2 className='text-xs sm:text-sm font-light text-muted'>Exercises</h2>
                    <Excersice />
                </div>
                <div className={stat}>
                    <h2 className='text-xs sm:text-sm font-light text-muted'>Minutes</h2>
                    <Minutes />
                </div>
                <div className={stat}>
                    <h2 className='text-xs sm:text-sm font-light text-muted'>Calories</h2>
                    <Calories />
                </div>
            </div>

            <SelectedPlanList />
        </div>
    );
};

export default page;
