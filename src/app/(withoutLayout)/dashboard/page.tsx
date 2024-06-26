import { options } from '@/app/api/auth/[...nextauth]/options';
import AdminDashboard from '@/components/dashboard/admin/AdminHome';
import UserDashboardSkeleton from '@/components/dashboard/user/UserDashboardSkeleton';
import UserDashboard from '@/components/dashboard/user/UserHome';
import { getServerSession } from 'next-auth';
import * as React from 'react';

interface IDashboardPageProps {
}
const DashboardPage: React.FunctionComponent<IDashboardPageProps> = async (props) => {
  const session = await getServerSession(options);
  const role = session?.user.role;
  
  
  
 
  return <section className='min-h-full h-full'>

    {
      !session && <UserDashboardSkeleton />
    }

    {/* we have to work how to handle this one this is  not right way okey for go for it */}
    {
      session && role === 'USER' ? <UserDashboard /> : session && role === 'ADMIN' && <AdminDashboard />
    }
    
  </section>;
};

export default DashboardPage;
