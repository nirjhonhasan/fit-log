"use client"


import { ButtonContext } from '@/context/ButtonContext';
import { PlanContext } from '@/context/PlanContext';
import React, { useContext } from 'react';



const Excersice = () => {

    const { isActive, setIsActive } = useContext(ButtonContext);
    const { myPlan, savePlan } = useContext(PlanContext);


    const planExerciseCout =
        isActive === "plan" ? myPlan.length : '0';

        const saveExerciseCout =
        isActive === "saved" ? myPlan.length : '0';


    return (
        <div>



            {
                isActive === "plan" ? (<h1 className='text-5xl font-bold text-lime-500'> {myPlan.length}</h1>) :
                    (<h1 className='text-5xl font-bold text-lime-500'> {savePlan.length}</h1>)
            }



        
        </div > 
    );
};

export default Excersice;