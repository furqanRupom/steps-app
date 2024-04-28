"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiHome, FiUsers, FiSettings, FiLogOut, FiBell, FiUser, FiBarChart, FiShoppingBag, FiMusic } from 'react-icons/fi';
import { BsFillFolderSymlinkFill } from 'react-icons/bs';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`flex flex-row bg-gray-900 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-0'} transition-transform duration-300 ease-in-out h-full`}>
            <div className="flex flex-col w-56 bg-gray-900 rounded-r-3xl overflow-hidden">
                <div className="flex items-center justify-center h-20 shadow-md">
                    <h1 className="text-3xl  text-red-400">Steps</h1>
                </div>
                <ul className="flex flex-col py-4">
                    <li>
                        <Link href="/" passHref>
                            <p className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><FiHome /></span>
                                <span className="text-sm font-medium">Dashboard</span>
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" passHref>
                            <p className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><FiMusic /></span>
                                <span className="text-sm font-medium">Music</span>
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" passHref>
                            <p className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><BsFillFolderSymlinkFill /></span>
                                <span className="text-sm font-medium">Drink</span>
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" passHref>
                            <p className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><FiShoppingBag /></span>
                                <span className="text-sm font-medium">Shopping</span>
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" passHref>
                            <p className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><FiBarChart /></span>
                                <span className="text-sm font-medium">Chat</span>
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" passHref>
                            <p className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><FiUser /></span>
                                <span className="text-sm font-medium">Profile</span>
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" passHref>
                            <p className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><FiBell /></span>
                                <span className="text-sm font-medium">Notifications</span>
                                <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/" passHref>
                            <p className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><FiLogOut /></span>
                                <span className="text-sm font-medium">Logout</span>
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;

