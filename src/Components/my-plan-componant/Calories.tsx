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



const Calories = () => {

    const { isActive}:BtnTypes = useContext(ButtonContext) as BtnTypes;
    const { myPlan, savePlan }:PlanTyes = useContext(PlanContext)as PlanTyes;

    const totalPlanCalories = isActive === "plan"
        ? myPlan.reduce((acc, plan) => acc + (Number(plan.caloriesBurned) || 0), 0)
        : 0;


    const totalSavedCalories = isActive === "saved"
        ? savePlan.reduce((acc, plan) => acc + (Number(plan.caloriesBurned) || 0), 0)
        : 0;


    return (
        <div>
            {
                isActive === "plan" ? <h1 className='text-3xl sm:text-5xl font-black'>
                    {totalPlanCalories}
                </h1> : <h1 className='text-3xl sm:text-5xl font-black'>
                    {totalSavedCalories}
                </h1>
            }
        </div>
    );
};

export default Calories;