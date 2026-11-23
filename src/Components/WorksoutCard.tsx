import { IFit } from '@/Types/FitTypes';
import React from 'react';
import { FiClock, FiStar } from 'react-icons/fi';
import { FaFire } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface WorkoutProps {
    item: IFit;
}

const WorksoutCard = ({ item }: WorkoutProps) => {
    return (
        <Link href={`/workouts/${item.id}`} className="group block h-full">
            <article className="h-full flex flex-col bg-surface rounded-2xl overflow-hidden border border-line shadow-lg
             hover:border-accent/50 hover:-translate-y-1 hover:shadow-accent/5 transition duration-300">

                <div className="relative w-full h-48 sm:h-52 overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={500}
                        height={400}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent" />
                </div>

                <div className="p-5 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                        {item.muscleGroups.map((muscle, index) => (
                            <span
                                key={index}
                                className="bg-accent text-black text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-wide mb-1">
                        {item.name}
                    </h3>

                    <p className="text-muted text-sm mb-4 font-medium">
                        {item.equipment}
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-2 border-t border-line pt-4 text-muted text-xs sm:text-sm">
                        <div className="flex items-center gap-1.5">
                            <FiClock className="w-4 h-4" />
                            <span>{item.duration} min</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <FaFire className="w-4 h-4 text-orange-500" />
                            <span>{item.caloriesBurned} kcal</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <FiStar className="w-4 h-4 text-yellow-400" />
                            <span>{item.rating}</span>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default WorksoutCard;
