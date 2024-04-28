import React from 'react';
import DashboardHeader from '@/components/dashboard/Shared/DashboardHeader';
import Sidebar from '@/components/dashboard/Shared/Sidebar';
import { NextAuthProvider } from '@/provider/NextAuthProvider';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = async({ children }) => {
    const session = await getServerSession(options)
    return (
      <>
 
                <div className="grid grid-cols-12 min-h-screen">
                    {/* Sidebar */}
                    <div className="col-span-2">
                        <Sidebar session={session} />
                    </div>
                    {/* Main Content */}
                    <div className="col-span-10">
                        <div >
                            {/* Header */}
                        <DashboardHeader session={session} />
                            {/* Children Content */}
                            <main>{children}</main>
                        </div>
                    </div>
                </div>
      
      </>
    );
};

export default DashboardLayout;
