"use client"
import * as React from 'react';
import { NextUIProvider } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";


interface IFACAccordianProps {
}

const FAQAccordian: React.FunctionComponent<IFACAccordianProps> = (props) => {
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
            answer: "We welcome your feedback and suggestions! You can reach out to our support team through the contact form on our website or directly from within the Steps application. Your input helps us improve and enhance the platform to better meet your needs."
        }
    ];
    return <section className='min-h-[400px] bg-gradient-to-br from-gray-900 to-gray-950 backdrop-blur-2xl pt-32 pb-8 px-8 lg:px-0'>
        <NextUIProvider>

            <div className='max-w-7xl mx-auto'>
                <h2 className="text-3xl text-white font-semibold  mb-6">Frequently Asked Questions</h2>
                <p className='text-gray-500 leading-relaxed pb-12'>
                    Have questions? We've got answers! Check out our frequently asked questions to learn more about using Steps.
                </p>
                <Accordion  >
                   {
                    faqs.map((faq) => <AccordionItem key={faq.question} title={faq.question}>
                         {faq.answer}
                    </AccordionItem>)
                   }
                </Accordion>

            </div>
        </NextUIProvider>
    </section>;
};

export default FAQAccordian;
