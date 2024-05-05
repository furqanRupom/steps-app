"use client"
import React from 'react';

import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { BiNotification } from 'react-icons/bi';
import { FiMessageCircle } from 'react-icons/fi';

const DashboardHeader: React.FunctionComponent = () => {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const socialAuthenticateUser = useSession();
    const socialUser = socialAuthenticateUser?.data?.user;

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <header className="bg-slate-950 text-white flex items-center justify-end lg:justify-between px-12 py-5 shadow shadow-gray-800">
            <h1 className="text-xl font-bold hidden lg:block"><span className='text-red-400'>{socialUser?.role === 'USER' ? 'User' : socialUser?.role === 'ADMIN' && 'Admin'} </span>Home</h1>
            <div className="relative flex items-center space-x-5">
                <div className='flex items-center space-x-3'>
                    <button>
                        <FiMessageCircle className='w-7 text-red-400 h-7 mt-2' />
                    </button>
                    <button>
                        <BiNotification className='w-7 h-7 mt-2 text-red-400' />
                    </button>
                </div>
                <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button className="text-white focus:outline-none" onClick={togglePopup}>
                        <span>
                            <Image className="relative object-cover ring ring-red-400 inline-flex items-center justify-center w-10 h-10 text-lg text-white rounded-full bg-emerald-500 hover:ring-red-500 duration-500" width={20} height={20} src={socialUser?.image as string || "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg"} alt='user image' />
                        </span>
                    </Menu.Button>
                    {isPopupOpen && (
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >

                        <div className="absolute top-full right-0 mt-2 bg-slate-950 border border-gray-800  shadow-lg rounded-lg overflow-hidden z-10 w-64">
                            <div className="p-4">
                                <div className="  space-x-4">
                                    <div>
                                        <p className="text-gray-300 font-semibold">{socialUser?.name}</p>
                                        <p className="text-gray-500">{socialUser?.email}</p>
                                        <div className='w-full h-[0.10rem] bg-gray-800 my-2 left-0 absolute'></div>
                                        <div>
                                            <ul className='flex flex-col py-5 w-full'>
                                                <li>
                                                    <Link className='text-gray-300 inline-flex w-full duration-200 hover:bg-slate-800 px-2 w py-2 rounded-md' href="/">
                                                        <span>Home</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className='text-gray-300 inline-flex w-full duration-200 hover:bg-slate-800 px-2 w py-2 rounded-md' href="/settings">Settings</Link>
                                                </li>
                                                <li>
                                                    <Link className='text-gray-300 inline-flex w-full duration-200 hover:bg-slate-800 px-2 w py-2 rounded-md' href="/dashboard/profile">Profile</Link>
                                                </li>
                                            </ul>
                                            <div className='w-full h-[0.10rem] bg-gray-800  left-0 absolute'></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-gray-300 duration-200  hover:bg-gray-800 px-2 mt-2 w-full py-2 rounded-md '>
                                    <button onClick={() => signOut({
                                        callbackUrl: "https://steps-app-rouge.vercel.app/login"
                                    })} >
                                        <span className='text-red-400'>Logout</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        </Transition>
                    )}
                </Menu>
            </div>
        </header>
    );
};

export default DashboardHeader;
