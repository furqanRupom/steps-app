"use client"
import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'; // Importing Chevron Icons from React Icons

const FAQAccordion = () => {
    // FAQ data
    const faqs = [
        {
            question: "How can I track my goals using Steps?",
            answer: "Steps provides a user-friendly interface where you can create, edit, and delete goals. You can track your progress step by step, mark tasks as completed, and set deadlines to stay on track towards achieving your goals."
        },
        {
            question: "Is my data secure on Steps?",
            answer: "Yes, Steps takes security seriously. We use industry-standard encryption protocols to protect your data, and our servers are hosted on secure platforms. Additionally, we offer secure authentication powered by NextAuth.js to ensure only authorized users can access their accounts."
        },
        {
            question: "Can I access Steps on my mobile device?",
            answer: "Absolutely! Steps is built with a responsive design, ensuring optimal user experience across devices of all sizes. Whether you're using a desktop, laptop, tablet, or smartphone, you can access Steps seamlessly."
        },
        {
            question: "How can I provide feedback or suggest new features?",
            answer: "We welcome your feedback and suggestions! You can reach out to our support team through the contact form on our website or directly from within the Steps application. "
        }
    ];

    // State to manage accordion toggling
    const [isOpen, setIsOpen] = useState(null);

    // Function to toggle accordion
    const toggle = (idx:any) => setIsOpen(prevIdx => (prevIdx === idx ? null : idx));

    return (
        <section className='min-h-450px] lg:min-h-[400px] h-full pt-32 pb-8 px-2  sm:px-4 md:px-8 lg:px-0 '>

            <div className=' max-w-7xl mx-auto px-2 '>
                <h2 className="text-2xl text-white font-semibold mb-6 ">Frequently Asked Questions</h2>
                <p className='text-gray-500 leading-relaxed pb-12'>
                    Have questions? We have got answers! Check out our frequently asked questions to learn more about using Steps.
                </p>
                <div className='relative min-h-[450px]  lg:min-h-96'>
                    <div className="rounded-lg  mx-auto h-full  absolute">
                        {faqs.map((data, idx) => (
                            <div key={idx}>
                                {/* FAQ Item */}
                                <div onClick={() => toggle(idx)} className="px-4 md:px-8 py-6 cursor-pointer">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-white">{data.question}</h4>
                                        
                                        <span className="mr-4 text-red-400 hidden md:block">
                                            {isOpen === idx ? <BsChevronUp /> : <BsChevronDown />}
                                        </span>
                                    </div>
                                   
                                </div>
                                <div className='w-full h-[0.1rem] bg-gray-900 '></div>
                                {/* Answer */}
                                <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <div className="text-gray-500 py-6  px-5 lg:px-12 ">
                                            {data.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;

