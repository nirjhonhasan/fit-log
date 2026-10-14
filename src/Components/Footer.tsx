import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'

const Footer = () => {
    return (
        <div className='container mx-auto mt-5 py-6 flex justify-between items-center'>

            <h2 className='flex justify-center items-center gap-2'>
                <Image
                src={logo}
                alt='Footer Logo'
                width={15}
                height={15}/>
                FITLOG
            </h2>
            <p className='text-sm text-gray-500 font-light'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
    );
};

export default Footer;