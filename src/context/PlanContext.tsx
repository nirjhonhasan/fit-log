"use client";

import React, { createContext, ReactNode, useState } from 'react';



export const PlanContext = createContext({})

const PlanProvider = ({children}:{children:ReactNode}) => {


    const [myPlan, setMyPlan] = useState([]);
    const [savePlan, setSavePlan] = useState([]);


    const sharedData = {
        myPlan,
        setMyPlan, 
        savePlan, 
        setSavePlan,
    }

    return <PlanContext.Provider value={sharedData}>{children}</PlanContext.Provider>;
};

export default PlanProvider;