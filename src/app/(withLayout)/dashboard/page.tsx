import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import * as React from 'react';

interface IDashboardPageProps {
}

const DashboardPage: React.FunctionComponent<IDashboardPageProps> = async(props) => {
  const session = await getServerSession(options);
  console.log({session});
  return <>
  our dashboard page
  </>;
};

export default DashboardPage;
