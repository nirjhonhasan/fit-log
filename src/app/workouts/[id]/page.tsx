import { IFit } from '@/Types/FitTypes';
import Image from 'next/image';
import React from 'react';
import SaveLaterBtn from '@/Components/planDetailsBtn/SaveLaterBtn';
import TodayPlanBtn from '@/Components/planDetailsBtn/TodayPlanBtn';

interface DetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const FitData = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog', { cache: "no-store" });

    return res.json();
}



const page = async ({ params }:DetailsPageProps) => {

    const { id } = await params;
    const items = await FitData();
    const item = items.find((item: IFit) => String(item.id) === String(id))



    return (
        <div className="min-h-screen bg-[#0f1117] text-white flex items-center justify-center p-4 md:p-8">
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                {/* Left Side: Image */}
                <div className="relative border-2 border-cyan-400/80 rounded-2xl overflow-hidden bg-[#181a24] p-1.5 shadow-lg">
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={600}
                        height={800}
                    />
                </div>

                {/* Right Side: Details Content */}
                <div className="flex flex-col justify-between">
                    <div>
                        {/* Title & Description */}
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider mb-2 text-white">
                            {item.name}
                        </h1>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            {item.description}
                        </p>

                        {/* Muscle Groups Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {item.muscleGroups?.map((group: string, index: number) => (
                                <span
                                    key={index}
                                    className="bg-[#ccff00] text-black font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wide"
                                >
                                    {group}
                                </span>
                            ))}
                        </div>

                        {/* Stats Table */}
                        <div className="bg-[#161822] rounded-xl overflow-hidden mb-6 border border-gray-800/80 text-sm">
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-800/60">
                                <span className="text-gray-400 uppercase text-xs tracking-wider font-semibold">Equipment</span>
                                <span className="font-medium text-gray-200">{item.equipment}</span>
                            </div>
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-800/60">
                                <span className="text-gray-400 uppercase text-xs tracking-wider font-semibold">Difficulty</span>
                                <span className="font-medium text-gray-200">{item.difficulty}</span>
                            </div>
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-800/60">
                                <span className="text-gray-400 uppercase text-xs tracking-wider font-semibold">Sets</span>
                                <span className="font-medium text-gray-200">{item.sets}</span>
                            </div>
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-800/60">
                                <span className="text-gray-400 uppercase text-xs tracking-wider font-semibold">Reps</span>
                                <span className="font-medium text-gray-200">{item.reps}</span>
                            </div>
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-800/60">
                                <span className="text-gray-400 uppercase text-xs tracking-wider font-semibold">Duration</span>
                                <span className="font-medium text-gray-200">{item.duration} min</span>
                            </div>
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-800/60">
                                <span className="text-gray-400 uppercase text-xs tracking-wider font-semibold">Calories</span>
                                <span className="font-medium text-gray-200">{item.caloriesBurned} kcal</span>
                            </div>
                            <div className="flex justify-between items-center px-4 py-2.5">
                                <span className="text-gray-400 uppercase text-xs tracking-wider font-semibold">Rating</span>
                                <span className="font-medium text-gray-200">{item.rating}</span>
                            </div>
                        </div>

                        {/* Instructions List */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold uppercase tracking-wider mb-3 text-white">
                                INSTRUCTIONS
                            </h3>
                            <ol className="text-gray-300 text-xs md:text-sm space-y-2 list-decimal list-inside leading-relaxed">
                                {item.instructions?.map((instruction: string, index: number) => (
                                    <li key={index} className="pl-1">
                                        {instruction}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                        <TodayPlanBtn item={item}/>
                        <SaveLaterBtn item={item}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default page;