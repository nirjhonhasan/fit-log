import { IFit } from '@/Types/FitTypes';
import Image from 'next/image';
import React from 'react';
import SaveLaterBtn from '@/Components/planDetailsBtn/SaveLaterBtn';
import TodayPlanBtn from '@/Components/planDetailsBtn/TodayPlanBtn';

// export const dynamic = "force-dynamic";

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
        <div className="flex items-center justify-center px-4 py-8 sm:py-12 md:py-16">
            <div className="page-shell grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                {/* Left Side: Image */}
                <div className="relative border border-line rounded-3xl overflow-hidden bg-surface p-2 shadow-2xl">
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={600}
                        height={800}
                        className="w-full h-auto rounded-2xl object-cover"
                    />
                </div>

                {/* Right Side: Details Content */}
                <div className="flex flex-col justify-between min-w-0">
                    <div>
                        {/* Title & Description */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wide mb-3">
                            {item.name}
                        </h1>
                        <p className="text-muted text-sm sm:text-base mb-4 leading-relaxed">
                            {item.description}
                        </p>

                        {/* Muscle Groups Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {item.muscleGroups?.map((group: string, index: number) => (
                                <span
                                    key={index}
                                    className="bg-accent text-black font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wide"
                                >
                                    {group}
                                </span>
                            ))}
                        </div>

                        {/* Stats Table */}
                        <div className="bg-surface rounded-xl overflow-hidden mb-6 border border-line text-sm">
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-line">
                                <span className="text-muted uppercase text-xs tracking-wider font-semibold">Equipment</span>
                                <span className="font-medium text-base-content">{item.equipment}</span>
                            </div>
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-line">
                                <span className="text-muted uppercase text-xs tracking-wider font-semibold">Difficulty</span>
                                <span className="font-medium text-base-content">{item.difficulty}</span>
                            </div>
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-line">
                                <span className="text-muted uppercase text-xs tracking-wider font-semibold">Sets</span>
                                <span className="font-medium text-base-content">{item.sets}</span>
                            </div>
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-line">
                                <span className="text-muted uppercase text-xs tracking-wider font-semibold">Reps</span>
                                <span className="font-medium text-base-content">{item.reps}</span>
                            </div>
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-line">
                                <span className="text-muted uppercase text-xs tracking-wider font-semibold">Duration</span>
                                <span className="font-medium text-base-content">{item.duration} min</span>
                            </div>
                            <div className="flex justify-between items-center px-4 py-2.5 border-b border-line">
                                <span className="text-muted uppercase text-xs tracking-wider font-semibold">Calories</span>
                                <span className="font-medium text-base-content">{item.caloriesBurned} kcal</span>
                            </div>
                            <div className="flex justify-between items-center px-4 py-2.5">
                                <span className="text-muted uppercase text-xs tracking-wider font-semibold">Rating</span>
                                <span className="font-medium text-base-content">{item.rating}</span>
                            </div>
                        </div>

                        {/* Instructions List */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold uppercase tracking-wider mb-3 text-accent">
                                INSTRUCTIONS
                            </h3>
                            <ol className="text-base-content/80 text-sm space-y-2 list-decimal list-inside leading-relaxed">
                                {item.instructions?.map((instruction: string, index: number) => (
                                    <li key={index} className="pl-1">
                                        {instruction}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch gap-3 pt-2">
                        <TodayPlanBtn item={item}/>
                        <SaveLaterBtn item={item}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default page;