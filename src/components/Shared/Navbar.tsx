"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { NavlinksGenerator } from '@/utils/NavLinksGenerator';
import { useSession } from 'next-auth/react';
import { RiLoginBoxLine, RiLoginCircleLine } from '@remixicon/react';
import ProfileData from './ProfileData';
import { FaBarsStaggered } from 'react-icons/fa6';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  /* active links ----- user,admin; - dashboard -> user,admin  */

  const pathName = usePathname();
  const withoutNavs = ["/dashboard", "/dashboard/admin", "/dashboard/user", "/dashboard/superAdmin"];

  const session = useSession();

  const user = session.data?.user
  const navbars = NavlinksGenerator(user?.role || "");





  return (
    <>
      {
        withoutNavs.includes(pathName) ? <></> : <nav className='flex justify-between lg:justify-normal lg:px-12 lg:py-8 lg:space-x-12  lg:items-center px-8 py-3  fixed  w-full top-0 z-50  lg:bg-opacity-25 bg-gray-900   backdrop-blur-2xl bg-gradient-to-t from-slate-950 to-gray-900   lg:bg-transparent   lg:bg-gradient-to-tr lg:from-transparent lg:to-transparent'>
          <h3 className='text-red-400 text-3xl lg:text-4xl font-bold'>Step<span className='text-white'>s</span></h3>
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <FaBarsStaggered className='text-red-400  w-7 h-7  ' />

            </button>
            {
              user && <ProfileData />
            }
          </div>





          <ul className={`flex flex-col text-xl lg:flex-row justify-end px-12 py-5 lg:py-0 lg:px-0 space-y-3 lg:space-y-0 lg:space-x-5 text-white  items-center  ${isOpen ? '-translate-y-0 duration-500 lg:duration-0 lg:-translate-y-0 ' : '-translate-y-[1000px] duration-1000 lg:duration-0 lg:-translate-y-0'} bg-opacity-80  absolute bg-gradient-to-b from-slate-950 to-gray-900  top-14  lg:top-0 left-0 lg:relative w-full z-50 lg:bg-transparent   lg:bg-opacity-5 lg:bg-gradient-to-tr lg:from-transparent lg:to-transparent `} >

            {
              user && navbars?.map(({ path, name }) => <li key={path} className={`hover:text-red-400 duration-500 w-fit ${pathName == path ? 'text-red-400 border-b-2 border-red-400 ' : ''}`}>
                <Link href={path}>{name}</Link>
              </li>) 
            }
            {
              !user && navbars?.map(({ path, name }) => <li key={path} className={`hover:text-red-400 duration-500 w-fit ${pathName == path ? 'text-red-400 border-b-2 border-red-400 ' : ''}`}>
                <Link href={path}>{name}</Link>
              </li>)
            }

            {
              !user && <div>
              <li >
              <Link href="/login">
                    <button className='px-6 py-2 rounded-xl w-full text-lg font-semibold bg-transparent text-red-400 border-2 border-red-400  hover:border-red-500 hover:text-red-500 duration-500'>
                      Login
                    </button>
              </Link>
              </li>
                
              </div>
            }
            {
              user && <li className='hidden lg:block'>
                <ProfileData />
              </li>
            }

         
          </ul>


        </nav>
      }
    </>
  );
};

export default Navbar;
