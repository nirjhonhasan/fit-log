"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
    { href: '/', label: 'Workouts' },
    { href: '/my-plan', label: 'My Plan' },
];

const NavLinks = ({ className = '' }: { className?: string }) => {
    const pathname = usePathname();

    return (
        <>
            {links.map(({ href, label }) => {
                const active = href === '/' ? pathname === '/' || pathname.startsWith('/workouts') : pathname.startsWith(href);
                return (
                    <li key={href}>
                        <Link
                            href={href}
                            aria-current={active ? 'page' : undefined}
                            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${className} ${active
                                ? 'bg-accent/10 text-accent'
                                : 'text-muted hover:text-white hover:bg-surface-2'}`}
                        >
                            {label}
                        </Link>
                    </li>
                );
            })}
        </>
    );
};

export default NavLinks;
