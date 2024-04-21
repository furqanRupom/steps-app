import * as React from 'react';

interface aboutPageProps {
}

export const metadata = {
  title: "Steps | about",
  description: "learn more about us in our about diary"
}

const aboutPage: React.FunctionComponent<aboutPageProps> = (props) => {
  return <h3 className='min-h-screen  flex items-center justify-center w-full h-full bg-gradient-to-t from-black to-gray-900 backdrop-blur-2xl text-center'>
    this is our great about page you know
  </h3>;
};

export default aboutPage;
