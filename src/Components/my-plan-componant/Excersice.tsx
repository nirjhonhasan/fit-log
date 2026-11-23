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


const Excersice = () => {

    const { isActive }:BtnTypes = useContext(ButtonContext) as BtnTypes;
    const { myPlan, savePlan }:PlanTyes = useContext(PlanContext) as PlanTyes;


    // const planExerciseCout =
    //     isActive === "plan" ? myPlan.length : '0';

    //     const saveExerciseCout =
    //     isActive === "saved" ? myPlan.length : '0';


    return (
        <div>



            {
                isActive === "plan" ? (<h1 className='text-3xl sm:text-5xl font-black text-accent'> {myPlan.length}</h1>) :
                    (<h1 className='text-3xl sm:text-5xl font-black text-accent'> {savePlan.length}</h1>)
            }



        
        </div > 
    );
};

export default Excersice;