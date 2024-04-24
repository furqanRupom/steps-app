import FeedbackForm from '@/components/feedback/FeedBackForm';
import * as React from 'react';

interface IFeedbackPageProps {
}

const FeedbackPage: React.FunctionComponent<IFeedbackPageProps> = (props) => {
  return <>
    <FeedbackForm />
  </>;
};

export default FeedbackPage;
