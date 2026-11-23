import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFire } from 'react-icons/fa';
import { FiArrowRight, FiClock } from 'react-icons/fi';
import banner from '@/assets/banner.png'

const stats = [
    { value: '12', label: 'Lifts' },
    { value: '8+', label: 'Muscle groups' },
    { value: '5', label: 'Per day' },
];

const Banner = () => {
    return (
        <section className='container mx-auto px-4 sm:px-6 mt-4 sm:mt-8'>
            <div className='relative isolate overflow-hidden rounded-[2rem] border border-line bg-surface
             px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20
             grid md:grid-cols-[1.1fr_0.9fr] items-center gap-10 md:gap-6'>

                {/* Background: grid pattern + glows */}
                <div
                    aria-hidden
                    className='absolute inset-0 -z-10 opacity-[0.07]
                     [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
                     [background-size:44px_44px]
                     [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]'
                />
                <div aria-hidden className='absolute -top-32 -left-24 -z-10 size-96 rounded-full bg-accent/15 blur-3xl' />
                <div aria-hidden className='absolute -bottom-40 right-0 -z-10 size-[28rem] rounded-full bg-accent/10 blur-3xl' />

                {/* Copy */}
                <div className='flex flex-col gap-5 items-center text-center md:items-start md:text-left'>
                    <span className='inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-bold tracking-widest text-accent'>
                        <span className='relative flex size-2'>
                            <span className='absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75' />
                            <span className='relative inline-flex size-2 rounded-full bg-accent' />
                        </span>
                        WORKOUT LIBRARY
                    </span>

                    <h1 className='text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.02] tracking-tight'>
                        TRAIN WITH
                        <br />
                        <span className='bg-gradient-to-r from-accent to-emerald-300 bg-clip-text text-transparent'>INTENT.</span>
                        <br />
                        LOG EVERY SET.
                    </h1>

                    <p className='max-w-md text-sm sm:text-base font-light text-muted leading-relaxed'>
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    <div className='mt-2 flex flex-col sm:flex-row items-stretch gap-3 w-full sm:w-auto'>
                        <Link
                            href='#library'
                            className='group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-accent hover:bg-accent-hover
                             font-bold text-sm text-black transition duration-200 hover:-translate-y-0.5 shadow-lg shadow-accent/20'>
                            BROWSE WORKOUTS
                            <FiArrowRight className='transition group-hover:translate-x-1' />
                        </Link>
                        <Link
                            href='/my-plan'
                            className='inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-line hover:border-accent/60
                             hover:text-accent font-semibold text-sm transition duration-200 hover:-translate-y-0.5'>
                            MY PLAN
                        </Link>
                    </div>

                    <dl className='mt-4 flex w-full sm:w-auto justify-center md:justify-start divide-x divide-line'>
                        {stats.map((s) => (
                            <div key={s.label} className='px-4 sm:px-6 first:pl-0 text-center md:text-left'>
                                <dt className='sr-only'>{s.label}</dt>
                                <dd className='text-2xl sm:text-3xl font-black text-white'>{s.value}</dd>
                                <p className='text-[11px] sm:text-xs uppercase tracking-wider text-muted'>{s.label}</p>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Visual */}
                <div className='relative mx-auto w-full max-w-[280px] sm:max-w-sm md:max-w-none'>
                    <div aria-hidden className='absolute inset-6 rounded-full bg-accent/20 blur-2xl' />
                    <div aria-hidden className='absolute inset-0 m-auto size-[85%] rounded-full border border-accent/20' />
                    <Image
                        src={banner}
                        alt='Banner Image'
                        priority
                        sizes='(max-width: 768px) 70vw, 420px'
                        className='relative w-full h-auto drop-shadow-2xl'
                    />

                    <div className='absolute left-0 top-6 sm:-left-4 flex items-center gap-2 rounded-2xl border border-line bg-surface-2/90 px-3 py-2 text-xs font-semibold shadow-xl backdrop-blur'>
                        <FaFire className='text-orange-500' /> 320 kcal
                    </div>
                    <div className='absolute right-0 bottom-8 sm:-right-2 flex items-center gap-2 rounded-2xl border border-line bg-surface-2/90 px-3 py-2 text-xs font-semibold shadow-xl backdrop-blur'>
                        <FiClock className='text-accent' /> 45 min
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
