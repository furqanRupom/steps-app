import AdminDashboard from '@/components/dashboard/Home/AdminHome';
import * as React from 'react';

interface IDashboardProps {
}

const Dashboard: React.FunctionComponent<IDashboardProps> = (props) => {
  return <>
  <AdminDashboard />
  </>;
};

export default Dashboard;
