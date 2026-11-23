"use client";

import { PlanContext } from '@/context/PlanContext';
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useContext } from 'react';
import { FiClock, FiStar } from 'react-icons/fi';
import { IoFlame } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { FaPlus } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { IFit } from '@/Types/FitTypes';
import Link from 'next/link';



interface SavePlanRouteProps {
  plans: IFit[];
}
interface PlanContextType {
  setSavePlan: Dispatch<SetStateAction<IFit[]>>;}



const SavePlanRoute = ({ plans }:SavePlanRouteProps) => {
    const { setSavePlan }:PlanContextType = useContext(PlanContext) as PlanContextType;

    const handleRemoveFromSaved = (id: string | number) => {
        if (setSavePlan) {
            setSavePlan((prev:IFit[]) => prev.filter((item:IFit) => item.id !== id));
            toast.info("Removed from saved list!");
        }
    };




    return (
        <div className="w-full flex flex-col gap-3 sm:gap-4 p-3 sm:p-4">
            {plans?.map((plan:IFit, index: number) => (
                <div
                    key={plan.id || index}
                    className="w-full bg-surface border border-line rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-accent/40 transition-all shadow-lg"
                >
                    {/* Left Side: Image and Details */}
                    <div className="flex items-center gap-4 w-full sm:w-auto min-w-0">
                        <div className="relative w-24 h-20 sm:w-32 rounded-xl overflow-hidden shrink-0 bg-surface-2">
                            <Image
                                src={plan.image}
                                alt={plan.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-1 min-w-0">
                            <h3 className="font-bold text-base sm:text-lg tracking-wide uppercase truncate">
                                {plan.name || "Workout"}
                            </h3>
                            <p className="text-muted text-sm font-medium">
                                {plan.equipment}
                            </p>

                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium mt-1">
                                <span className="flex items-center gap-1 text-accent">
                                    <FiClock className="text-accent text-sm" />
                                    {plan.duration } min
                                </span>
                                <span className="flex items-center gap-1 text-accent">
                                    <IoFlame className="text-accent text-sm" />
                                    {plan.caloriesBurned} kcal
                                </span>
                                <span className="flex items-center gap-1 text-accent">
                                    <FiStar className="text-accent text-sm" />
                                    {plan.rating }
                                </span>
                            </div>
                        </div>
                    </div>

                    
                    <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
                        <Link href={`/workouts/${plan.id}`}
                         className="px-4 py-2 rounded-full border border-line hover:border-accent/60 hover:text-accent text-xs font-semibold transition-all">
                            View Details
                        </Link>

                        

                        
                        <button
                            onClick={() => handleRemoveFromSaved(plan.id)}
                            className="text-muted hover:text-white p-1.5 rounded-full hover:bg-surface-2 transition-all ml-1 cursor-pointer"
                            title="Remove from saved"
                        >
                            <RxCross2 className="text-lg" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SavePlanRoute;