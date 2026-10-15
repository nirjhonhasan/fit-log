import Link from 'next/link';
import React from 'react';

const SelectedPlanList = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='bg-black/20 inline px-1 py-3 rounded-2xl'>

                    <Link href='/' className='rounded-2xl text-md font-light text-gray-500
                 hover:text-white hover:bg-gray-800 px-4 py-2'
                    >Today's Plan</Link>

                    <Link href='/' className='rounded-2xl text-md font-light text-gray-500
                 hover:text-white hover:bg-gray-800 px-4 py-2'
                    > Saved </Link>

                </div>

                <div className='flex justify-between items-center gap-4'>
                    <h2 className='text-sm font-light'>Short By</h2>
                    <button>Duration</button>
                </div>
            </div>


            <div className='flex justify-center items-center min-h-[400px] border-dashed border border-gray-700 mt-6 rounded-2xl'>
                <div className='flex flex-col text-center justify-center'>
                    <h2 className='text-2xl font-bold uppercase'>Nothing Here Yet!</h2>
                    <p className='mb-6 text-gray-500'>Browse the library and add a lift to get today moving.</p>
                    <Link href='/' className='px-4 py-2 rounded-full bg-lime-500 text-black
                    font-bold '>Go to Workouts</Link>
                </div>
            </div>

        </div>
    );
};

export default SelectedPlanList;