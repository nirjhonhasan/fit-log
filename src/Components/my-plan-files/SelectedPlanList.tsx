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





    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='bg-black/20 inline px-2 py-2 rounded-full'>

                    <button onClick={() => setIsActive("plan")}
                        className={`rounded-2xl text-md px-4 py-2 transition-all ${isActive === "plan"
                            ? "bg-lime-500 text-black font-bold"
                            : "bg-transparent text-gray-400 hover:text-white hover:bg-gray-800/60 font-light"
                            }`}
                    >Today's Plan</button>

                    <button onClick={() => setIsActive("saved")}
                        className={`rounded-2xl text-md px-4 py-2 transition-all ${isActive === "saved"
                            ? "bg-lime-500 text-black font-bold"
                            : "bg-transparent text-gray-400 hover:text-white hover:bg-gray-800/60 font-light"
                            }`}
                    > Saved </button>

                </div>

                <div className='flex justify-between items-center gap-4'>
                    <h2 className='text-sm font-light'>Short By</h2>




                    <div>
                        <select defaultValue="shortby"
                            onChange={(e) => setShortBy(e.target.value as "duration" | "rating" | "cal")}
                            className="select appearance-none">


                            <option disabled={true}>Duration</option>
                            <option value={"duration"}>Duration</option>
                            <option value={"rating"}>Rating</option>
                            <option value={"cal"}>Calories</option>
                        </select>
                    </div>



                </div>
            </div>




            <div className='flex justify-center items-center border-dashed border border-gray-700 mt-6 rounded-2xl'>

                {isActive === "plan" ? (
                    sortedPlan.length === 0 ? (
                        <div className='flex flex-col text-center justify-center items-center py-[120px]'>
                            <h2 className='text-2xl font-bold uppercase'>Nothing Here Yet!</h2>
                            <p className='mb-6 text-gray-500'>Browse the library and add a lift to get today moving.</p>
                            <Link href='/' className='px-4 py-2 rounded-full bg-lime-500 text-black font-bold'>
                                Go to Workouts
                            </Link>
                        </div>
                    ) : (
                        <TodayPlanRoute plans={sortedPlan} />
                    )
                ) : (
                    sortedPlan.length === 0 ? (
                        <div className='flex flex-col text-center justify-center items-center py-[120px]'>
                            <h2 className='text-2xl font-bold uppercase'>Nothing Here Yet!</h2>
                            <p className='mb-6 text-gray-500'>Browse the library and add a lift to get today moving.</p>
                            <Link href='/' className='px-4 py-2 rounded-full bg-lime-500 text-black font-bold'>
                                Go to Workouts
                            </Link>
                        </div>
                    ) : (
                        <SavePlanRoute plans={sortedPlan} />
                    )
                )}





            </div>

        </div>
    );
};

export default SelectedPlanList;