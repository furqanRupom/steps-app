"use client"

import * as React from 'react';
import { RiSafariFill, RiShapesFill, RiBrainFill, RiVipCrownLine, RiBarChart2Fill, RiRewindStartFill } from '@remixicon/react';
import { Card, Icon } from '@tremor/react';

interface IFeaturedProps {
}

const Featured: React.FunctionComponent<IFeaturedProps> = (props) => {
    return <section className="py-12   max-w-7xl mx-auto">
        <div className=" mx-auto px-4 grid  lg:grid-cols-2 items-center gap-5 ">
            <div className="mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">The Foundation of Success</h2>
                <p className="text-md text-gray-600">
                    Welcome to Steps, your ultimate companion on the journey to success. Crafted with precision and powered by innovation, Steps empowers you to conquer your goals with confidence.
                </p>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
                <Card className="shadow-tremor-card p-6 rounded-lg ">


                    <Icon color='red' className='text-red-400' icon={RiBrainFill} variant="simple" tooltip="simple" size="xl" />

                    <div>
                        <h3 className="text-xl font-semibold text-gray-500 mb-4">Task Management</h3>
                        <p className="text-gray-600">
                            Organize your tasks, set deadlines, and track progress efficiently.
                        </p>
                    </div>
                </Card>
                <Card className="shadow-tremor-card p-6 rounded-lg ">
                    <Icon color='red' className='text-red-400' icon={RiVipCrownLine} variant="simple" tooltip="simple" size="xl" />
                    <div>
                        <h3 className="text-xl font-semibold text-gray-500 mb-4">Goal Setting</h3>
                        <p className="text-gray-500">
                            Set achievable goals, break them down into tasks, and stay focused.
                        </p>
                    </div>
                </Card>
                <Card className="shadow-tremor-card p-6 rounded-lg ">
                    <Icon color='red' className='text-red-400' icon={RiBarChart2Fill} variant="simple" tooltip="simple" size="xl" />
                    <div>
                        <h3 className="text-xl font-semibold text-gray-500 mb-4">Collaboration</h3>
                        <p className="text-gray-500">
                            Collaborate with team members, assign tasks, and share progress seamlessly.
                        </p>
                    </div>
                </Card>
                <Card className="shadow-tremor-card p-6 rounded-lg ">
                    <Icon color='red' className='text-red-400' icon={RiRewindStartFill} variant="simple" tooltip="simple" size="xl" />
                    <div>
                        <h3 className="text-xl font-semibold text-gray-500 mb-4">Progress Tracking</h3>
                        <p className="text-gray-500">
                            Monitor your progress, analyze performance, and make data-driven decisions.
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    </section>;
};

export default Featured;
