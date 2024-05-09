import Hero from '@/components/Shared/Hero';
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
  return <section className='min-h-screen w-full h-full backdrop-blur-2xl '>
    <Hero
      secTitle="Share Your Thoughts with Us"
      title="We Value Your Feedback"
      description="Your opinion matters! Help us improve by sharing your thoughts and experiences with our service."
      buttonFirstText="Give Feedback"
      buttonSecondText="Learn More"
      imgUrl="https://i.ibb.co/64fS9qc/feedback.png"
      size={400}
      isButton={false}
    />

    <FeedbackForm />
  </section>;
};

export default FeedbackPage;
