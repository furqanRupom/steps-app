"use client"
import { useState } from 'react';
import Link from 'next/link';
import { DashboardGenerator } from '@/utils/NavLinksGenerator';
import { useSession } from 'next-auth/react';
import { UserRole } from '@prisma/client';
import { AiOutlineMenu } from 'react-icons/ai';

interface ISidebarProps { }

const Sidebar: React.FunctionComponent<ISidebarProps> = () => {
    const { data } = useSession();
    const user = data?.user;
    const [showSidebar, setShowSidebar] = useState(false);
    const sidebarLinks = DashboardGenerator(user?.role as UserRole || 'USER');

    return (
        <div className="relative">
            <div className="flex items-center justify-between bg-gray-900 py-[26px] lg:py-0">
                <Link href="/">
                    <h1 className="text-xl lg:text-3xl px-4 lg:py-5 text-red-400 flex items-center cursor-pointer overflow-hidden">
                        Step<span className="text-white">s</span>
                    </h1>
                </Link>
                <button
                    className="lg:hidden text-gray-300 rounded-full"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <AiOutlineMenu className="text-2xl" />
                </button>
            </div>
            <div
                className={`fixed inset-0 bg-gray-900 h-full bg-opacity-30 -z-10 ${showSidebar ? '' : 'hidden'
                    }`}
                onClick={() => setShowSidebar(false)}
            ></div>
            <div
                className={`flex flex-row bg-gray-900 lg:translate-x-0 transition-transform duration-300 ease-in-out min-h-screen ${showSidebar ? '' : '-translate-x-full'
                    } lg:translate-x-0 transform h-full lg:h-auto`}
            >
                <div className="flex flex-col lg:w-56 bg-gray-900 w-full rounded-r-3xl overflow-hidden z-50 lg:z-0">
                    <ul className="flex flex-col py-4 justify-center lg:justify-start">
                        {sidebarLinks?.map(({ path, name, icon }) => (
                            <li key={name}>
                                <Link href={path} passHref>
                                    <p className="flex flex-row items-center h-12 transition-transform hover:translate-x-2 ease-in duration-200 text-gray-500 hover:text-red-400">
                                        <span className="inline-flex items-center justify-center h-12 w-full lg:w-12 text-2xl lg:text-lg text-gray-400">
                                            {icon}
                                        </span>
                                        <span className="text-sm font-medium hidden lg:block">
                                            {name}
                                        </span>
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;



