"use client"

import { PlanContext } from '@/context/PlanContext';
import { IFit } from '@/Types/FitTypes';
import React, { Dispatch, SetStateAction, useContext } from 'react';
import { toast } from 'react-toastify';


interface PlanContextType {
    savePlan: IFit[];
    setSavePlan: Dispatch<SetStateAction<IFit[]>>;
}



const SaveLaterBtn = ({ item }: { item: IFit }) => {

    const { savePlan, setSavePlan }: PlanContextType = useContext(PlanContext) as PlanContextType;


    const handleSaveLater = () => {
        toast.success(`Hello Bangladesh`);

        setSavePlan([...savePlan, item]);
    }

    

    return (
        <button onClick={handleSaveLater}
            className="w-full sm:w-auto bg-[#161822] hover:bg-[#202330] text-gray-300 font-semibold py-3 
        px-5 rounded-xl flex items-center justify-center gap-2 text-sm border
         border-gray-800 transition-all cursor-pointer">
            Save for later
        </button>
    );
};

export default SaveLaterBtn;