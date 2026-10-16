"use client"

import { ButtonContext } from '@/context/ButtonContext';
import { PlanContext } from '@/context/PlanContext';
import React, { useContext } from 'react';

const Minutes = () => {

    const { isActive, setIsActive } = useContext(ButtonContext);
    const { myPlan, savePlan, } = useContext(PlanContext);

    const totalPlanMinutes = isActive === "plan"
        ? myPlan.reduce((acc, plan) => acc + (Number(plan.duration) || 0), 0)
        : 0;


    const totalSavedMinutes = isActive === "saved"
        ? savePlan.reduce((acc, plan) => acc + (Number(plan.duration) || 0), 0)
        : 0;


    return (
        <div>
            {
                isActive === "plan" ? <h1 className='text-5xl font-bold text-lime-500'>
                    {totalPlanMinutes}
                </h1> : <h1 className='text-5xl font-bold text-lime-500'>
                    {totalSavedMinutes}
                </h1>
            }
        </div>
    );
};

export default Minutes;