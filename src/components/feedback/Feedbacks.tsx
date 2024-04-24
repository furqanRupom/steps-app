import * as React from 'react';
import prisma from "@/prisma/client"

interface IFeedbacksProps {
}
const allFeedbacks = async () => {
  const feedback = await prisma.feedback.findMany();
  return feedback;
}

const feedbacks = await allFeedbacks();




const Feedbacks: React.FunctionComponent<IFeedbacksProps> = (props) => {
  return <div className="container mx-auto w-full h-full max-w-7xl pt-12">
    <div>
      <h1 className="text-xl lg:text-4xl pb-3 text-white">
        Client Feedbacks
      </h1>
      <p>
        Explore the valuable feedback provided by our clients.
      </p>
    </div>
    <div className="relative wrap overflow-hidden p-10 h-full">
      {/* Vertical bar running through middle */}
      <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border lg:left-[50%]"></div>

      {/* Feedback Cards */}
      {feedbacks.map((feedback, index) => (
        <div key={feedback.id} className={`mb-3 flex justify-between items-center w-full h-full ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
          {/* Empty div for spacing */}
          <div className="lg:w-5/12 hidden lg:block"></div>
          {/* Timeline Dot */}
          <div className="z-20 hidden lg:flex items-center bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
          </div>
          {/* Feedback Content */}
          <div className={`rounded-lg shadow-xl w-full lg:w-5/12 px-6 py-4 ${index % 2 === 0 ? 'bg-gray-900' : 'bg-slate-900'} text-gray-200 text-xl text-left`}>
            

            <blockquote className='italic'>
            <p className="text-xs lg:text-medium leading-snug tracking-wide ">"{feedback.feedback}"</p>
            </blockquote>
            <h3 className=" font-semibold text-sm pt-3 text-right">- {feedback.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>

};

export default Feedbacks;
