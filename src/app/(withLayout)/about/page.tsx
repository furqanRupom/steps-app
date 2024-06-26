import Hero from '@/components/Shared/Hero';
import Journey from '@/components/Shared/Journey';
import Achievement from '@/components/about/Achievement';
import EstateinTeam from '@/components/about/EstateinTeam';
import Values from '@/components/about/Values';
import * as React from 'react';

interface aboutPageProps {
}

export const metadata = {
  title: "Steps | about",
  description: "learn more about us in our about diary"
}

const aboutPage: React.FunctionComponent<aboutPageProps> = (props) => {
  return <section className='bg-gradient-to-tr from-gray-900 to-gray-950 '>

    <Hero
      secTitle="Unlock Your Potential with Our Revolutionary Steps to Success"
      title="Discover Our Story"
      description="At Steps, we're dedicated to helping you turn your goals into reality. Join us on your journey to success."
      imgUrl="https://i.ibb.co/kq6Js1J/teamwork-concept-landing-page-52683-21300-removebg-preview.png"
      isButton={false}
    />

    <Values />

    <Achievement />
    <EstateinTeam />

    <Journey />

  
  </section>;
};

export default aboutPage;
