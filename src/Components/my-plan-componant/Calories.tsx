"use client"

import { ButtonContext } from '@/context/ButtonContext';
import { PlanContext } from '@/context/PlanContext';
import React, { useContext } from 'react';

const Calories = () => {

    const { isActive, setIsActive } = useContext(ButtonContext);
    const { myPlan, savePlan, } = useContext(PlanContext);

    const totalPlanCalories = isActive === "plan"
        ? myPlan.reduce((acc, plan) => acc + (Number(plan.caloriesBurned) || 0), 0)
        : 0;


    const totalSavedCalories = isActive === "saved"
        ? savePlan.reduce((acc, plan) => acc + (Number(plan.caloriesBurned) || 0), 0)
        : 0;


    return (
        <div>
            {
                isActive === "plan" ? <h1 className='text-5xl font-bold'>
                    {totalPlanCalories}
                </h1> : <h1 className='text-5xl font-bold'>
                    {totalSavedCalories}
                </h1>
            }
        </div>
    );
};

export default Calories;