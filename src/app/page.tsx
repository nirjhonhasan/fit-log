import Banner from '@/Components/Banner';
import Workouts_Home from '@/Components/Workouts_Home';
import React from 'react';

export const instant = false;


const page = () => {
  return (
    <div>


      <Banner/>
      <Workouts_Home/>

      
    </div>
  );
};

export default page;