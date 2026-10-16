"use client";

import { PlanContext } from '@/context/PlanContext';
import Image from 'next/image';
import React, { useContext } from 'react';
import { FiClock, FiStar } from 'react-icons/fi';
import { IoFlame } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { FaCheck } from 'react-icons/fa6';
import { IFit } from '@/Types/FitTypes';

const TodayPlanRoute = () => {
    const { myPlan, setMyPlan } = useContext(PlanContext);

    // Item remove korar handler
    const handleRemove = (id: string | number) => {
        if (setMyPlan) {
            setMyPlan((prev) => prev.filter((item)=> item.id !== id));
        }
    };

    return (
        <div className="w-full flex flex-col gap-4 p-4">
            {myPlan?.map((plan: any, index: number) => (
                <div
                    key={plan.id || index}
                    className="w-full bg-[#12141d] border border-gray-800/80 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 hover:border-gray-700 transition-all shadow-lg"
                >
                    {/* Left Side: Image and Details */}
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="relative w-28 h-20 sm:w-32 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-gray-800">
                            <Image
                                src={plan.image || "/placeholder.jpg"}
                                alt={plan.title || "Workout"}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <h3 className="text-white font-bold text-lg tracking-wide uppercase">
                                {plan.title || "RUSSIAN TWIST"}
                            </h3>
                            <p className="text-gray-400 text-sm font-medium">
                                {plan.equipment || plan.category || "Medicine Ball"}
                            </p>

                            <div className="flex items-center gap-4 text-xs font-medium text-gray-300 mt-1">
                                <span className="flex items-center gap-1 text-lime-400">
                                    <FiClock className="text-lime-400 text-sm" />
                                    {plan.duration || 8} min
                                </span>
                                <span className="flex items-center gap-1 text-lime-400">
                                    <IoFlame className="text-lime-400 text-sm" />
                                    {plan.calories || 70} kcal
                                </span>
                                <span className="flex items-center gap-1 text-lime-400">
                                    <FiStar className="text-lime-400 text-sm" />
                                    {plan.rating || 4.1}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Action Buttons */}
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end mt-2 sm:mt-0">
                        <button className="px-4 py-2 rounded-full border border-gray-700 hover:border-gray-500 text-gray-200 text-xs font-semibold transition-all">
                            View Details
                        </button>

                        <button className="px-4 py-2 rounded-full bg-[#ccff00] hover:bg-[#b5e600] text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-md">
                            <FaCheck className="text-sm" />
                            Mark as Done
                        </button>

                        <button
                            onClick={() => handleRemove(plan.id)}
                            className="text-gray-500 hover:text-gray-300 p-1 transition-all ml-1"
                            title="Remove plan"
                        >
                            <RxCross2 className="text-lg" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodayPlanRoute;