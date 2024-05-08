"use client"
import { Menu,  Transition } from '@headlessui/react'
import { FaBarsStaggered } from "react-icons/fa6";
import { RiBarChartLine } from '@remixicon/react';
import { Icon } from '@tremor/react';
import Image from 'next/image';
import * as React from 'react';
import { FaHamburger } from 'react-icons/fa';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { UserRole } from '@prisma/client';

interface IProfileDataProps {
}

const ProfileData: React.FunctionComponent<IProfileDataProps> = (props) => {
    const session = useSession();
     const image = session.data?.user?.image;
      
    return <div className=" top-3 right-20  lg:top-0 lg:right-0  ">
        <Menu>
            <Menu.Button className="flex items-center space-x-3  rounded-3xl">
                <FaBarsStaggered className='text-red-400 hidden lg:block w-7 h-7 rotate-180 ' />
                <Image className="relative object-cover object-center ring ring-red-400 inline-flex items-center justify-center w-8 h-8 text-lg text-white rounded-full bg-emerald-500 hover:ring-red-500 duration-500" width={20} height={20} src={image as string || "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg"} alt='user image' />
                
            </Menu.Button>
            <Transition
                enter="transition ease-out duration-75"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Menu.Items
                    className="my-5 -ml-24 mt-3 lg:-ml-10 absolute  origin-top-left rounded-xl border border-white/5 bg-white/5 px-5 py-1  text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
                >
                    <Menu.Item>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                          <Link href="/dashboard">Dashboard</Link>
                        </button>
                    </Menu.Item>
                    <Menu.Item>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            <Link href="/dashboard/profile">Profile</Link>
                        </button>
                    </Menu.Item>
                    <div className="my-1 h-px bg-white/5" />
                    <Menu.Item>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            <Link href="/settings">Settings</Link>
                        </button>
                    </Menu.Item>
                    <Menu.Item>
                        <button onClick={() => signOut({
                            callbackUrl:"https://steps-app-rouge.vercel.app/login"
                        })} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            Logout
                        </button>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    </div>;
};

export default ProfileData;
