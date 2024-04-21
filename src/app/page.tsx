import Banner from '@/components/home/Banner';
import Values from '@/components/home/Values';
import * as React from 'react';

interface IHomePageProps {
}



const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return <>
        <Banner />
        <Values />
  </>;
};

export default HomePage;
