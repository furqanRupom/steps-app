import React from 'react';
import DashboardHeader from '@/components/dashboard/Shared/DashboardHeader';
import Sidebar from '@/components/dashboard/Shared/Sidebar';
import { NextAuthProvider } from '@/provider/NextAuthProvider';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = async({ children }) => {
    const session = await getServerSession(options);
    
    return (
            <>

            <div className="grid grid-cols-[0fr,1fr]  lg:grid-cols-[1fr,5fr] min-h-screen h-full bg-gray-900 ">
                    {/* Sidebar */}
                    <div className="h-full relative">
                        <Sidebar />
                    </div>
                    {/* Main Content */}
                    <div  >
                    <div>
                            {/* Header */}
                            <DashboardHeader  />
                            {/* Children Content */}
                            <main >{children}</main>
                        </div>
                    </div>
                </div>

            </>
    );
};

export default DashboardLayout;
