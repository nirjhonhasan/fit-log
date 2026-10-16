"use client"


import { PlanContext } from '@/context/PlanContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const SavedBtn = () => {
    const { savePlan } = useContext(PlanContext);


    return (
        <div>
            <Link href='/my-plan'>
            Plan <span className='bg-lime-500 text-black text-sm font-bold px-2 rounded-full'> {savePlan.length}</span></Link>
        </div>
    );
};

export default SavedBtn;