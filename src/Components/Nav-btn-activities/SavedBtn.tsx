"use client"

import { PlanContext } from '@/context/PlanContext';
import { IFit } from '@/Types/FitTypes';
import Link from 'next/link';
import React, { useContext } from 'react';

const SavedBtn = () => {
    const { savePlan }: { savePlan: IFit[] } = useContext(PlanContext) as { savePlan: IFit[] };

    return (
        <Link href='/my-plan'
            className='flex items-center gap-1.5 rounded-full px-2.5 sm:px-3 py-1.5 text-sm font-semibold text-base-content hover:bg-accent/10 hover:text-accent transition'>
            Saved
            <span className='border border-line bg-surface-2 text-xs font-bold min-w-5 text-center px-1.5 py-0.5 rounded-full'>{savePlan.length}</span>
        </Link>
    );
};

export default SavedBtn;
