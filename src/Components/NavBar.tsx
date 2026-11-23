import Image from 'next/image';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import PlanBtn from './Nav-btn-activities/PlanBtn';
import SavedBtn from './Nav-btn-activities/SavedBtn';
import NavLinks from './NavLinks';

const NavBar = () => {
    return (
        <header className='sticky top-0 z-40 border-b border-line bg-base-100/75 backdrop-blur-xl'>
            <div className='container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3'>

                {/* Left: mobile menu + logo */}
                <div className='flex items-center gap-1 sm:gap-2'>
                    <div className='dropdown lg:hidden'>
                        <div tabIndex={0} role='button' aria-label='Open menu'
                            className='grid size-10 place-items-center rounded-full text-muted hover:text-white hover:bg-surface-2 transition cursor-pointer'>
                            <svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h10' />
                            </svg>
                        </div>
                        <ul tabIndex={-1}
                            className='menu dropdown-content mt-3 w-56 gap-1 rounded-2xl border border-line bg-surface-2 p-2 shadow-2xl z-10'>
                            <NavLinks className='block' />
                        </ul>
                    </div>

                    <Link href='/' className='flex items-center gap-2.5 font-black tracking-wide text-lg sm:text-xl'>
                        <span className='grid size-9 place-items-center rounded-xl bg-accent/10 border border-accent/30'>
                            <Image src={logo} height={20} width={20} alt='' />
                        </span>
                        <span>FIT<span className='text-accent'>LOG</span></span>
                    </Link>
                </div>

                {/* Center: desktop links */}
                <nav aria-label='Main' className='hidden lg:block'>
                    <ul className='flex items-center gap-1 rounded-full border border-line bg-surface p-1'>
                        <NavLinks />
                    </ul>
                </nav>

                {/* Right: counters */}
                <div className='flex items-center gap-1 sm:gap-2'>
                    <PlanBtn />
                    <SavedBtn />
                </div>
            </div>
        </header>
    );
};

export default NavBar;
