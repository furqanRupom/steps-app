import Image from 'next/image';
import * as React from 'react';
import dashboradGif from "@/assets/gif/dashboard.gif"

interface IdashboardLoadingPageProps {
}

const dashboardLoadingPage: React.FunctionComponent<IdashboardLoadingPageProps> = (props) => {
  return <section className='absolute inset-0 flex items-center justify-center w-full h-full bg-gray-950 z-50'>
    <Image src={dashboradGif} alt='loading' width={100} height={100} />
  </section>;
};

export default dashboardLoadingPage;
