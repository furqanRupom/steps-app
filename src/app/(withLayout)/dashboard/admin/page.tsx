import * as React from 'react';

interface IAdminHomeProps {
}

const AdminHome: React.FunctionComponent<IAdminHomeProps> = (props) => {
  return <section>
    <h3 className='text-4xl font-bold text-center py-3'>this is our admin home page</h3>
  </section>;
};

export default AdminHome;
