import * as React from 'react';
import prisma from "@/prisma/client"

interface IFeedbacksProps {
}
const allFeedbacks = async () => {
    const feedback = await prisma.feedback.findMany();
    return feedback;
}

const feedbacks =  await allFeedbacks();




const Feedbacks: React.FunctionComponent<IFeedbacksProps> = (props) => {
  return <section>
    <h3>All Feedbacks here</h3>
  </section>;
};

export default Feedbacks;
