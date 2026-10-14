import { IFit } from '@/Types/FitTypes';
import React from 'react';
import { FiClock, FiStar } from 'react-icons/fi'; // React Icons থেকে
import { FaFire } from 'react-icons/fa'; // React Icons থেকে
import Image from 'next/image';

interface WorkoutProps {
    item: IFit;
}

const WorksoutCard = ({ item }: WorkoutProps) => {
    return (
        <div className="bg-[#181a20] rounded-2xl overflow-hidden border border-gray-800 shadow-lg text-white hover:border-gray-700 transition duration-300">
            
            
            {/* Image Section */}
            <div className="relative w-full h-48 sm:h-52 overflow-hidden">
                <Image 
                    src={item.image} 
                    alt={item.name} 
                    width={500}
                    height={400}
                    className="w-full h-full object-cover object-center"
                />
            </div>

           
           
            {/* Content Section */}
            <div className="p-5">
                {/* Muscle Group Badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {item.muscleGroups.map((muscle, index) => (
                        <span 
                            key={index}
                            className="bg-[#ccff00] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

               
               
                {/* Title */}
                <h3 className="text-xl font-black uppercase tracking-wide text-white mb-1">
                    {item.name}
                </h3>

                {/* Equipment */}
                <p className="text-gray-400 text-sm mb-4 font-medium">
                    {item.equipment}
                </p>

                {/* Border Divider */}
                <div className="border-t border-gray-800/80 my-3"></div>

                {/* Footer Stats (Duration, Calories, Rating) */}
               
               
                <div className="flex items-center justify-between text-gray-400 text-xs sm:text-sm pt-1 mb-6">
                    {/* Duration */}
                    <div className="flex items-center gap-1.5">
                        <FiClock className="w-4 h-4 text-gray-400" />
                        <span>{item.duration} min</span>
                    </div>

                    {/* Calories */}
                    <div className="flex items-center gap-1.5">
                        <FaFire className="w-4 h-4 text-orange-500" />
                        <span>{item.caloriesBurned} kcal</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                        <FiStar className="w-4 h-4 text-yellow-400" />
                        <span>{item.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorksoutCard;