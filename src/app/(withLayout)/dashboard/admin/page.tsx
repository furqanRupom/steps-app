import AdminDashboard from '@/components/dashboard/admin/AdminHome';
import * as React from 'react';

interface IAdminHomeProps {
}

const AdminHome: React.FunctionComponent<IAdminHomeProps> = (props) => {
  return <section>
    <AdminDashboard />
  </section>;
};

export default AdminHome;
