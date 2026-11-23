import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'

const Footer = () => {
    return (
        <footer className='border-t border-line mt-16'>
            <div className='container mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row gap-3 sm:justify-between items-center text-center'>
                <h2 className='flex items-center gap-2 font-black tracking-wide'>
                    <Image src={logo} alt='Footer Logo' width={18} height={18} />
                    FITLOG
                </h2>
                <p className='text-xs sm:text-sm text-muted font-light'>
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
