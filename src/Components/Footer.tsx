import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.png'

const Footer = () => {
    return (
        <footer className='relative mt-20 border-t border-line bg-surface/60'>
            <div aria-hidden className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent' />

            <div className='container mx-auto px-4 sm:px-6 py-10 grid gap-8 sm:grid-cols-[1.5fr_1fr] items-start'>
                <div className='flex flex-col items-center sm:items-start text-center sm:text-left gap-3'>
                    <Link href='/' className='flex items-center gap-2.5 font-black tracking-wide text-xl'>
                        <span className='grid size-9 place-items-center rounded-xl bg-accent/10 border border-accent/30'>
                            <Image src={logo} alt='' width={20} height={20} />
                        </span>
                        FIT<span className='text-accent'>LOG</span>
                    </Link>
                    <p className='max-w-xs text-sm font-light text-muted leading-relaxed'>
                        Pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>
                </div>

                <nav aria-label='Footer' className='flex justify-center sm:justify-end gap-8 text-sm'>
                    <div className='flex flex-col gap-2 items-center sm:items-start'>
                        <h3 className='text-xs font-bold uppercase tracking-widest text-white'>Explore</h3>
                        <Link href='/' className='text-muted hover:text-accent transition'>Workouts</Link>
                        <Link href='/my-plan' className='text-muted hover:text-accent transition'>My Plan</Link>
                    </div>
                </nav>
            </div>

            <div className='border-t border-line'>
                <p className='container mx-auto px-4 sm:px-6 py-4 text-center sm:text-left text-xs text-muted font-light'>
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
