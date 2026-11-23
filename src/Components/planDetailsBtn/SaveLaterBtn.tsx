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


        const isAlreadyAdded = savePlan.some((savePlan) => savePlan.id === item.id);
    
    
        const handleSaveLater = () => {
    
            if (isAlreadyAdded) {
                toast.warning(`"${item.name}" is already in your Saved Plan!`);
                return;
            }
    
            setSavePlan([...savePlan, item]);
            toast.success(`Saved for Later`);
        };

    

    return (
        <button onClick={handleSaveLater}
            className="w-full sm:w-auto bg-surface hover:bg-surface-2 font-semibold py-3 
        px-5 rounded-xl flex items-center justify-center gap-2 text-sm border
         border-line hover:border-accent/50 transition-all cursor-pointer">
            Save for later
        </button>
    );
};

export default SaveLaterBtn;