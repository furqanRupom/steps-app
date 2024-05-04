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
      secTitle="Stay Organized and Achieve More"
      title="Discover Our Story"
      description="At Steps, we're dedicated to helping you turn your goals into reality. Our platform provides powerful tools for tracking tasks, setting milestones, and staying focused on what matters most to you. Join us on your journey to success."
      buttonFirstText="Get Started"
      buttonSecondText="Learn More"
      imgUrl="https://i.ibb.co/kq6Js1J/teamwork-concept-landing-page-52683-21300-removebg-preview.png"
    />

    <Values />

    <Achievement />
    <EstateinTeam />

    <Journey />

  
  </section>;
};

export default aboutPage;
