"use client"

import PlanProvider, { PlanContext } from '@/context/PlanContext';
import { IFit } from '@/Types/FitTypes';
import React, { Dispatch, SetStateAction, useContext } from 'react';
import { toast } from 'react-toastify';


interface PlanContextType {
    myPlan: IFit[];
    setMyPlan: Dispatch<SetStateAction<IFit[]>>;
}



const TodayPlanBtn = ({ item }: { item: IFit }) => {

    const { myPlan, setMyPlan }: PlanContextType = useContext(PlanContext) as PlanContextType;



    const isAlreadyAdded = myPlan.some((planItem) => planItem.id === item.id);


    const handleTodayPlanBtn = () => {

        if (isAlreadyAdded) {
            toast.warning(`"${item.name}" is already in your Daily Plan!`);
            return;
        }

        setMyPlan([...myPlan, item]);
        toast.success(`Added to Today's Plan`);
    };


    return (

        <button onClick={handleTodayPlanBtn}
            className="w-full sm:flex-1 bg-[#ccff00] hover:bg-[#b5e600] text-black font-bold py-3 
        px-5 rounded-xl flex items-center justify-center gap-2 text-sm transition-all shadow-md cursor-pointer">
            Add to today s plan
        </button>

    );
};

export default TodayPlanBtn;