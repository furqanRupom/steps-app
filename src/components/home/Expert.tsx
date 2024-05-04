"use client"
import React from 'react';
import { Card, Icon } from '@tremor/react';
import Feedbacks from '../feedback/Feedbacks';
import { GrSolaris } from 'react-icons/gr';
import { RemixiconComponentType, Ri24HoursFill, RiDatabaseLine, RiIndentDecrease, RiTaskFill } from '@remixicon/react';
interface CardProps {
    title: string;
    icon: RemixiconComponentType; // You can replace this with an actual icon component if needed
    description: string;
}


const Expert: React.FC = () => {
    const cards: CardProps[] = [
        {
            title: 'Clear Goals',
            icon: Ri24HoursFill,
            description: 'Set clear and achievable goals to stay focused on what truly matters.'
        },
        {
            title: 'Streamlined Tasks',
            icon: RiTaskFill,
            description: 'Organize tasks associated with each goal, reducing clutter and improving productivity.'
        },
        {
            title: 'Customizable Interface',
            icon: RiIndentDecrease,
            description: 'Personalize your dashboard and workspace to minimize distractions and maximize efficiency.'
        },
        {
            title: 'Data-driven Insights',
            icon: RiDatabaseLine,
            description: 'Gain valuable insights into your progress and productivity, helping you make informed decisions.'
        }
    ];

  

    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl lg:text-2xl font-bold text-white mb-6">More Focus, Less Clutter</h2>
                <p className="text-gray-400 mb-8">
                    Our application is designed to simplify your workflow and enhance your focus by eliminating distractions and clutter. Here are some key features that promote a more streamlined and productive experience:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cards.map(({icon,title,description}, index) => (
                        <Card key={index} className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center mb-4">
                                <div className="flex-shrink-0 mr-4">
                                    <Icon color='red' className='text-red-400' icon={icon} />
                                </div>
                                <h3 className="text-md font-semibold text-gray-400">{title}</h3>
                            </div>
                            <p className="text-gray-600">{description}</p>
                        </Card>
                    ))}
                </div>
             
            </div>
        </section>
    );
};

export default Expert;
