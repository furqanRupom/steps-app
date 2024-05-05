
import { Card } from '@tremor/react';
import axios from 'axios';
import * as React from 'react';

interface IFeedbacksProps {
}









const Feedbacks: React.FunctionComponent<IFeedbacksProps> = (props) => {
  const feedbacks = [
    {
      id: 1,
      feedback: "Steps has been a game-changer for me! The goal and task tracking features are incredibly intuitive and easy to use.",
      name: "Sarah Thompson"
    },
    {
      id: 2,
      feedback: "I can't thank Steps enough for helping me organize my life. The ability to track my goals and tasks in one place has made such a difference. ",
      name: "David Rodriguez"
    },
    {
      id: 3,
      feedback: "Steps has been a lifesaver for me! As someone with a busy schedule, staying organized can be a challenge. But with Steps, I've finally found a tool that works for me.",
      name: "Emily Chen"
    },
    {
      id: 4,
      feedback: "I've tried a lot of goal tracking websites in the past, but none of them compare to Steps. The interface is sleek and user-friendly, and the customization options allow me to tailor it to my specific needs. .",
      name: "Michael Evans"
    },
    {
      id: 5,
      feedback: "I can't imagine my life without Steps now. It's become an essential part of my daily routine, and I've seen a significant improvement in my productivity and time management skills. ",
      name: "Jessica Lee"
    }
  ];


  return <div className="container mx-auto w-full h-full max-w-7xl pt-12 px-4 mt-8">
    <div>
      <h1 className="text-2xl lg:text-3xl pb-3 text-white">
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
      {Feedbacks.length == 0 ? <h3 className='text-red-400 text-center text-3xl py-3'>We Have no Feedback </h3> : feedbacks?.map((feedback, index) => (
        <div key={feedback.id} className={`mb-3 flex justify-between items-center w-full h-full ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
          {/* Empty div for spacing */}
          <div className="lg:w-5/12 hidden lg:block"></div>
          {/* Timeline Dot */}
          <div className="z-20 hidden lg:flex items-center bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
          </div>
          {/* Feedback Content */}
          <Card decoration='left' decorationColor='red' className={`rounded-lg shadow-xl w-full lg:w-5/12 px-6 py-4 ${index % 2 === 0 ? 'bg-gray-900' : 'bg-slate-900'} text-gray-200 text-xl text-left`}>


            <blockquote className='italic'>
              <p className="text-xs lg:text-medium leading-snug tracking-wide text-gray-400 ">&quot;{feedback.feedback}&quot;</p>
            </blockquote>
            <h3 className="  text-sm pt-3 text-right text-gray-50">- {feedback.name}</h3>
          </Card>
        </div>
      ))}
    </div>
  </div>

};

export default Feedbacks;
