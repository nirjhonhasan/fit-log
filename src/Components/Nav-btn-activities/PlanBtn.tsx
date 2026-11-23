"use client"

import { PlanContext } from '@/context/PlanContext';
import { IFit } from '@/Types/FitTypes';
import Link from 'next/link';
import React, { useContext } from 'react';

const PlanBtn = () => {
    const { myPlan }: { myPlan: IFit[] } = useContext(PlanContext) as { myPlan: IFit[] };
    return (
        <Link href='/my-plan'
            className='flex items-center gap-1.5 rounded-full px-2.5 sm:px-3 py-1.5 text-sm font-semibold text-muted hover:bg-surface-2 hover:text-white transition'>
            Plan
            <span className='bg-accent text-black text-xs font-bold min-w-5 text-center px-1.5 py-0.5 rounded-full'>{myPlan.length}</span>
        </Link>
    );
};

export default PlanBtn;
