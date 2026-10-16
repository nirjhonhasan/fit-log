"use client";

import React, { ReactNode } from 'react';
import PlanProvider from '@/context/PlanContext';
import ButtonProvider from '@/context/ButtonContext';

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <PlanProvider>
            <ButtonProvider>
                {children}
            </ButtonProvider>
        </PlanProvider>
    );
}