"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { DashboardGenerator } from '@/utils/NavLinksGenerator';
import { UserRole } from '@prisma/client';
import { Session } from 'next-auth';
interface ISidebarProps {
  session:Session | null

}

const Sidebar : React.FunctionComponent<ISidebarProps> = ({session}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const sidebarLinks = DashboardGenerator(UserRole.ADMIN);

    return (
        <div className={`flex flex-row bg-gray-900 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-0'} transition-transform duration-300 ease-in-out h-full`}>
            <div className="flex flex-col w-56 bg-gray-900 rounded-r-3xl overflow-hidden">
                <div className="">
                  <Link href="/">
                        <h1 className="text-3xl px-4 py-3 text-red-400">Step<span className='text-white'>s</span></h1>
                  </Link>
                </div>
                <ul className="flex flex-col py-4">
                    {
                        sidebarLinks?.map(({ path, name, icon }) => <li key={name}>
                            <Link href={path} passHref>
                                <p className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-red-400">
                                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">{icon}</span>
                                    <span className="text-sm font-medium">{name}</span>
                                </p>
                            </Link>
                        </li>)
                    }

                </ul>
            </div>
        </div>
    );
};

export default Sidebar;

