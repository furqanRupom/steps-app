"use client"
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import * as React from 'react';
import { BiNotification } from 'react-icons/bi';
import { FiUser, FiLogOut, FiMessageCircle } from 'react-icons/fi';

interface IDashboardHeaderProps {
  session: Session | null
    
}




const DashboardHeader: React.FunctionComponent<IDashboardHeaderProps> = ({session}) => {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const user = session?.user;
    console.log(session);
    console.log(user);




    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

  

    return (
        <header className="bg-gray-900 text-white flex items-center justify-between px-12 py-5 shadow-md">
            <h1 className="text-2xl font-bold">Admin Home</h1>
            <div className="relative flex items-center space-x-5">
                <div className='flex items-center space-x-3'>
                    <button>
                        <FiMessageCircle className='w-7 text-red-400 h-7 mt-2' />
                    </button>
                    <button  >
                        <BiNotification className='w-7 h-7 mt-2 text-red-400' />
                    </button>
                </div>
                <button className="text-white focus:outline-none" onClick={togglePopup}>
                    <span
                        
                     
                    >
                        <Image className="relative inline-flex items-center justify-center w-10 h-10 text-lg text-white rounded-full bg-emerald-500 ring ring-gray-800" width={20} height={20} src={user?.image as string} alt='user image' />
                        
                        
                    </span>
                </button>
                {isPopupOpen && (
                    <div className="absolute top-full right-0 mt-2 text-center bg-gray-900 border border-gray-800 p-5 shadow-lg rounded-lg overflow-hidden z-10">
                        <div className="p-4">
                            <div className="flex items-center space-x-4">
                         
                                <div>
                                    <p className="text-gray-300 font-semibold">{user?.name}</p>
                                    <p className="text-gray-300">{user?.email}</p>
                                </div>
                            </div>
                            <button onClick={() => signOut({
                                callbackUrl:"http://localhost:3000/login"
                            })} className="block w-full text-left mt-4 py-2 px-4 bg-red-400 hover:bg-red-600 transition-colors duration-300" >
                                <div className="flex items-center space-x-2">
                                    <FiLogOut className="h-6 w-6" />
                                    <span>Logout</span>
                                </div>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default DashboardHeader;
