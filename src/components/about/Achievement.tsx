import { Card } from '@tremor/react';
import * as React from 'react';

interface IAchievementProps {
}

const Achievement: React.FunctionComponent<IAchievementProps> = (props) => {
    return <section className="pt-16 lg:pt-40 pb-8 bg-gradient-to-b from-gray-900 to-gray-950 backdrop-blur-2xl">
        <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6">Our Achievements</h2>
            <p className="text-lg text-gray-400 mb-8">
                At Steps, we are proud of the impact our platform has had on helping users reach their goals and improve their productivity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <Card className=" rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">10,000 Goals Achieved</h3>
                    <p className="text-gray-400">With the help of Steps, our users have successfully achieved over 10,000 goals, ranging from personal development milestones to professional accomplishments.</p>
                </Card>
                <Card className=" rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">Increased Productivity by 30%</h3>
                    <p className="text-gray-400">Through effective goal tracking and task management features, Steps has contributed to a significant increase in productivity among our users, with a measured improvement of 30%.</p>
                </Card>
                <Card className=" rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">Positive User Feedback</h3>
                    <p className="text-gray-400">We have received overwhelmingly positive feedback from our users, with an average satisfaction rating of 4.8 out of 5. Users appreciate the intuitive interface, seamless experience, and the tangible results they have achieved with Steps.</p>
                </Card>
            </div>
        </div>
    </section>;
};

export default Achievement;
