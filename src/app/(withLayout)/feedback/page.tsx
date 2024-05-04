import FeedbackForm from '@/components/feedback/FeedBackForm';
import Feedbacks from '@/components/feedback/Feedbacks';
import * as React from 'react';

interface IFeedbackPageProps {
}

export const metadata = {
  title: "Steps | feedback",
  description: "give your valuable feedback"
}

const FeedbackPage: React.FunctionComponent<IFeedbackPageProps> = (props) => {
  return <section className='min-h-screen w-full h-full bg-gradient-to-t from-black to-gray-900 backdrop-blur-2xl py-20'>
    <FeedbackForm />
  </section>;
};

export default FeedbackPage;
