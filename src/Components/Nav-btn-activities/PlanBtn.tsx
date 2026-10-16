"use client"


import { PlanContext } from '@/context/PlanContext';
import { IFit } from '@/Types/FitTypes';
import Link from 'next/link';
import React, { useContext } from 'react';

const PlanBtn = () => {
    const { myPlan }:{myPlan:IFit[]} = useContext(PlanContext) as {myPlan:IFit[]};
    return (
        <div>
            <Link href='/my-plan'>
            Plan <span className='bg-lime-500 text-black text-sm font-bold px-2 rounded-full'>{myPlan.length}</span></Link>
        </div>
    );
};

export default PlanBtn;