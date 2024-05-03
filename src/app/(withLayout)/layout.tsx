import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';
import * as React from 'react';

interface  CommonLayoutProps {
    children:React.ReactNode
}

const CommonLayout: React.FunctionComponent< CommonLayoutProps> = ({children}) => {
  return <>

  <Navbar />


    <main className='bg-gradient-to-br from-gray-900 to-gray-950 backdrop-blur-2xl'>

  {children}
</main>

  <Footer />
  
  </>;
};

export default CommonLayout;
