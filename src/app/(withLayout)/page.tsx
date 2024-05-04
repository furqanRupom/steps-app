import Journey from '@/components/Shared/Journey';
import Feedbacks from '@/components/feedback/Feedbacks';
import Banner from '@/components/home/Banner';
import Expert from '@/components/home/Expert';
import FAQAccordian from '@/components/home/FAQAccordian';
import Featured from '@/components/home/Featured';
import HowItWorks from '@/components/home/HowWorks';
import * as React from 'react';

interface IHomePageProps {
}



const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return <section className='bg-gradient-to-tr from-gray-900 to-gray-950'>
    <Banner />
    {/* Features Section */}
    <Featured />
    {/* How it wors section */}
    <HowItWorks />
    <Expert />
    <Feedbacks />
    <FAQAccordian />
    <Journey />

  </section>;
};

export default HomePage;
