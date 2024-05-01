"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { NavlinksGenerator } from '@/utils/NavLinksGenerator';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  /* active links ----- user,admin; - dashboard -> user,admin  */

  const pathName = usePathname();
  const withoutNavs = ["/dashboard","/dashboard/admin","/dashboard/user","/dashboard/superAdmin"];

  const session = useSession();

  const user = session.data?.user
  const navbars = NavlinksGenerator(user?.role || "");

  



  return (
    <>
      {
       withoutNavs.includes(pathName) ? <></> : <nav className='flex justify-between items-center px-8 py-3 fixed w-full top-0 z-50  bg-opacity-70 lg:bg-opacity-25 backdrop-blur-2xl bg-slate-950'>
          <h3 className='text-red-400 text-3xl font-bold'>Step<span className='text-white'>s</span></h3>

          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          <ul className={`flex flex-col  lg:flex-row px-12 py-5 lg:py-0 lg:px-0 space-y-3 lg:space-y-0 lg:space-x-5 text-white items-center text-lg font-normal ${isOpen ? '-translate-y-0 duration-500 lg:duration-0 lg:-translate-y-0' : '-translate-y-[1000px] duration-1000 lg:duration-0 lg:-translate-y-0'} absolute top-14 lg:top-0 left-0 lg:relative w-full lg:w-auto  bg-gray-950 bg-opacity-70 lg:bg-opacity-0 lg:bg-transparent`}>
            {
              user ? navbars?.map(({ path, name }) => <li key={path} className={`hover:text-red-400 duration-500 w-fit ${pathName == path ? 'text-red-400 border-b-2 border-red-400 ' : ''}`}>
                <Link href={path}>{name}</Link>
              </li>) : navbars?.map(({ path, name }) => <li key={path} className={`${path == '/login' || path == '/register' && name == 'Login' || name == 'register' ? 'border uppercase w-fit hover:text-red-400 hover:border-transparent duration-500 cursor-pointer border-red-400 py-1 px-7' : 'hover:text-red-400 duration-500 w-fit'} ${pathName == path ? 'text-red-400 border-b-2 border-red-400 ' : ''}`}>
                <Link href={path}>{name}</Link>
              </li>)
            }
          </ul>

        </nav>
      }
    </>
  );
};

export default Navbar;
