import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import banner from '@/assets/banner.png'

const Banner = () => {
    return (
        <section className='container mx-auto px-4 sm:px-6 mt-4 sm:mt-8'>
            <div className='relative overflow-hidden rounded-3xl border border-line bg-surface
             p-6 sm:p-10 lg:p-16 flex flex-col-reverse md:flex-row md:justify-between items-center gap-8 md:gap-12'>

                <div className='pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-accent/10 blur-3xl' />

                <div className='relative flex flex-col gap-4 md:max-w-lg items-center text-center md:items-start md:text-left'>
                    <span className='inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold tracking-widest text-accent'>
                        WORKOUT LIBRARY
                    </span>

                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight'>
                        TRAIN WITH INTENT. <span className='text-accent'>LOG EVERY SET.</span>
                    </h1>

                    <p className='text-sm sm:text-base font-light text-muted leading-relaxed'>
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    <Link
                        href='#library'
                        className='mt-4 px-6 py-3 rounded-full bg-accent hover:bg-accent-hover font-bold text-sm
                         text-black transition duration-200 ease-in-out hover:-translate-y-0.5 shadow-lg shadow-accent/10'>
                        BROWSE WORKOUTS
                    </Link>
                </div>

                <div className='relative w-full max-w-[260px] sm:max-w-sm md:max-w-[380px] shrink-0'>
                    <Image
                        src={banner}
                        alt='Banner Image'
                        priority
                        sizes='(max-width: 768px) 80vw, 380px'
                        className='w-full h-auto'
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
