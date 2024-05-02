import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';
import * as React from 'react';

interface  CommonLayoutProps {
    children:React.ReactNode
}

const CommonLayout: React.FunctionComponent< CommonLayoutProps> = ({children}) => {
  return <>

  <Navbar />

  {children}

  <Footer />
  
  </>;
};

export default CommonLayout;
