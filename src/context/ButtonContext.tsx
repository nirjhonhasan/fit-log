"use client"

import React, { createContext, ReactNode, useState } from 'react';



export const ButtonContext = createContext({});

const ButtonProvider = ({children}:{children:ReactNode}) => {

    
    const [isActive, setIsActive] = useState("plan")

    const sharedData = {
        isActive, 
        setIsActive,
    }


    return <ButtonContext.Provider value={sharedData}>{children}</ButtonContext.Provider>;
};

export default ButtonProvider;