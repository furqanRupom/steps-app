import { options } from '@/app/api/auth/[...nextauth]/options';
import UserProfile from '@/components/dashboard/Shared/Profile';
import { getServerSession } from 'next-auth';
import * as React from 'react';

interface IProfilePageProps {
}

const ProfilePage: React.FunctionComponent<IProfilePageProps> = async (props) => {
  
  return <>
    <UserProfile />
  </>;
};

export default ProfilePage;
