import Footer from '@/components/Shared/Footer';
import * as React from 'react';



const DashboardLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return <section>
        {children}
    </section>;
};

export default DashboardLayout;
