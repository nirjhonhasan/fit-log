"use client"

import { ButtonContext } from '@/context/ButtonContext';
import { PlanContext } from '@/context/PlanContext';
import { IFit } from '@/Types/FitTypes';
import React, { useContext } from 'react';

interface BtnTypes {
    isActive: string;
}

interface PlanTyes {
    myPlan: IFit[];
    savePlan: IFit[];
}



const Minutes = () => {

    const { isActive }:BtnTypes = useContext(ButtonContext) as BtnTypes;
    const { myPlan, savePlan }:PlanTyes = useContext(PlanContext) as PlanTyes;

    const totalPlanMinutes = isActive === "plan"
        ? myPlan.reduce((acc, plan) => acc + (Number(plan.duration) || 0), 0)
        : 0;


    const totalSavedMinutes = isActive === "saved"
        ? savePlan.reduce((acc, plan) => acc + (Number(plan.duration) || 0), 0)
        : 0;


    return (
        <div>
            {
                isActive === "plan" ? <h1 className='text-5xl font-bold'>
                    {totalPlanMinutes}
                </h1> : <h1 className='text-5xl font-bold'>
                    {totalSavedMinutes}
                </h1>
            }
        </div>
    );
};

export default Minutes;