import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import * as React from 'react';

interface IUserDashboardSkeletonProps {
}

const UserDashboardSkeleton: React.FunctionComponent<IUserDashboardSkeletonProps> = (props) => {
  return <>

 
      <section className='grid grid-cols-1 p-3 sm:grid-cols-2 lg:grid-cols-[5fr,3fr] mx-auto lg:p-10 w-full gap-5'>
          <div className="h-80 w-full bg-gray-900 animate-pulse rounded-3xl">
 
              
          </div>
          <div className="h-80  w-full bg-gray-900 animate-pulse rounded-3xl">
              
          </div>
      </section>


      {/* user charts */}

      <section className='grid  gap-4 lg:gap-10  lg:grid-cols-[4fr,2fr]  px-3 lg:px-8 mx-auto'>

          <div className="h-96  w-full bg-gray-900 animate-pulse rounded-3xl">

       </div>
          <div className="h-96  w-full bg-gray-900 animate-pulse rounded-3xl">

       </div>
      </section>

      <section className='grid lg:grid-cols-[4fr,2fr] px-10 gap-10 my-12'>
          <div className="h-80  w-full bg-gray-900 animate-pulse rounded-3xl">

          </div>
          <div className="h-80  w-full bg-gray-900 animate-pulse rounded-3xl">

        </div>
      </section>
  </>;
};

export default UserDashboardSkeleton;
