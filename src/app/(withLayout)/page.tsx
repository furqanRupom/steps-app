import Achievement from '@/components/home/Achievement';
import Banner from '@/components/home/Banner';
import EstateinTeam from '@/components/home/EstateinTeam';
import FAQAccordian from '@/components/home/FAQAccordian';
import Journey from '@/components/home/Journey';
import Values from '@/components/home/Values';
import * as React from 'react';

interface IHomePageProps {
}



const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return <section >
        <Banner />
        <Values />
        <Achievement />
        <EstateinTeam />
       

        <FAQAccordian />
        
        <Journey />
  </section>;
};

export default HomePage;
