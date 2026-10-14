import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import banner from '@/assets/banner.png'



const Banner = () => {
    return (
        <div className='bg-[#15171D] rounded-2xl m-8 p-16 flex justify-between
         items-center container mx-auto border border-gray-800'>
            <div className='flex flex-col gap-4 w-[500px] items-start'>

                <h2 className='text-sm text-lime-500 font-semibold'>WORKOUT LIBRARY</h2>

                <h1 className='text-5xl font-black'
                >TRAIN WITH INTENT. LOG
                    EVERY SET.</h1>

                <p className='text-sm font-light text-gray-300'
                >FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                    into today's plan, and watch the week's work add up.</p>

                <Link className='px-6 py-2 rounded bg-lime-400 hover:bg-lime-500 font-bold text-sm mt-8
                 text-black transition duration-200 ease-in-out hover:-translate-y-0.5 cursor-pointer'
                href='/'>BROWSE WORKOUTS</Link>

            </div>

            <div>
                <Image
                    src={banner}
                    width={400}
                    height={400}
                    alt='Banner Image'/>
            </div>
        </div>
    );
};

export default Banner;