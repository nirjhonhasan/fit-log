import Image from 'next/image';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import PlanBtn from './Nav-btn-activities/PlanBtn';
import SavedBtn from './Nav-btn-activities/SavedBtn';

const linkClass = 'hover:bg-accent/10 hover:text-accent text-sm font-bold rounded-full';

const navItem = <>
    <li><Link className={linkClass} href='/'>Workouts</Link></li>
    <li><Link className={linkClass} href='/my-plan'>My Plan</Link></li>
</>

const NavBar = () => {
    return (
        <header className='sticky top-0 z-40 border-b border-line bg-base-100/80 backdrop-blur'>
            <div className="navbar container mx-auto px-2 sm:px-6 min-h-16">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" aria-label="Open menu" className="btn btn-ghost btn-sm px-2 lg:hidden">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-surface-2 border border-line rounded-box z-10 mt-3 w-52 p-2 shadow-xl">
                            {navItem}
                        </ul>
                    </div>
                    <Link href='/' className="btn btn-ghost px-2 text-lg sm:text-xl font-black tracking-wide">
                        <Image src={logo} height={24} width={24} alt='Fit Log' />
                        FITLOG
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-1">
                        {navItem}
                    </ul>
                </div>

                <div className="navbar-end gap-2 sm:gap-3">
                    <PlanBtn /> <SavedBtn />
                </div>
            </div>
        </header>
    );
};

export default NavBar;
