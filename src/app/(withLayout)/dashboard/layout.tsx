import React from 'react';
import DashboardHeader from '@/components/dashboard/Shared/DashboardHeader';
import Sidebar from '@/components/dashboard/Shared/Sidebar';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="grid grid-cols-12 min-h-screen">
            {/* Sidebar */}
            <div className="col-span-2">
                <Sidebar />
            </div>
            {/* Main Content */}
            <div className="col-span-10">
                <div >
                    {/* Header */}
                    <DashboardHeader />
                    {/* Children Content */}
                    <main >{children}</main>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
