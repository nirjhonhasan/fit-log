"use client"

import Link from 'next/link';
import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import TodayPlanRoute from '../my-plan-route/TodayPlanRoute';
import { PlanContext } from '@/context/PlanContext';
import SavePlanRoute from '../my-plan-route/SavePlanRoute';
import { ButtonContext } from '@/context/ButtonContext';
import { IFit } from '@/Types/FitTypes';



interface PlanContextType {
    myPlan: IFit[];
    savePlan: IFit[];
}

interface ButtonContextType {
    isActive: string;
    setIsActive: Dispatch<SetStateAction<string>>;
}




const SelectedPlanList = () => {

    const [shortby, setShortBy] = useState<"duration" | "rating" | "cal">("duration");


    const { myPlan, savePlan }: PlanContextType = useContext(PlanContext) as PlanContextType;
    const { isActive, setIsActive }: ButtonContextType = useContext(ButtonContext) as ButtonContextType;



    
    const currentList = isActive === "plan" ? myPlan : savePlan;

    const sortedPlan = [...currentList].sort((a, b) => {
        if (shortby === "duration") {
            return (b.duration ) - (a.duration);
        }
        if (shortby === "cal") {
            return (b.caloriesBurned) - (a.caloriesBurned ); 
        }
        if (shortby === "rating") {
            return (b.rating) - (a.rating); 
        }
        return 0;
    });





    const tab = (active: boolean) =>
        `rounded-full text-sm px-4 py-2 transition-all cursor-pointer ${active
            ? "bg-accent text-black font-bold"
            : "text-muted hover:text-white hover:bg-surface-2 font-medium"}`;

    const empty = (
        <div className='flex flex-col text-center justify-center items-center py-16 sm:py-28 px-4'>
            <h2 className='text-xl sm:text-2xl font-black uppercase'>Nothing Here Yet!</h2>
            <p className='mt-1 mb-6 text-sm sm:text-base text-muted'>Browse the library and add a lift to get today moving.</p>
            <Link href='/' className='px-5 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-black text-sm font-bold transition'>
                Go to Workouts
            </Link>
        </div>
    );

    return (
        <div>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4'>
                <div className='bg-surface border border-line p-1.5 rounded-full flex w-full sm:w-auto'>
                    <button onClick={() => setIsActive("plan")}
                        className={`${tab(isActive === "plan")} flex-1 sm:flex-none`}>Today&apos;s Plan</button>
                    <button onClick={() => setIsActive("saved")}
                        className={`${tab(isActive === "saved")} flex-1 sm:flex-none`}>Saved</button>
                </div>

                <div className='flex items-center gap-3'>
                    <label htmlFor='sort' className='text-sm text-muted'>Sort by</label>
                    <select id='sort' defaultValue="duration"
                        onChange={(e) => setShortBy(e.target.value as "duration" | "rating" | "cal")}
                        className="select select-sm bg-surface border-line flex-1 sm:flex-none">
                        <option value={"duration"}>Duration</option>
                        <option value={"rating"}>Rating</option>
                        <option value={"cal"}>Calories</option>
                    </select>
                </div>
            </div>

            <div className='border-dashed border border-line mt-6 rounded-2xl overflow-hidden'>
                {sortedPlan.length === 0 ? empty : (
                    isActive === "plan"
                        ? <TodayPlanRoute plans={sortedPlan} />
                        : <SavePlanRoute plans={sortedPlan} />
                )}
            </div>
        </div>
    );
};

export default SelectedPlanList;
