import Image from 'next/image';
import * as React from 'react';
import icon5 from "@/assets/images/icons/icon5.png"
import icon6 from "@/assets/images/icons/icon6.png"
interface IEstateinTeamProps {
}

const teamMembers = [
    { name: "John Doe", role: "CEO & Co-founder",messageIcon:icon5,twitterIcon:icon6, imageUrl: "https://images.pexels.com/photos/3973335/pexels-photo-3973335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Jane Smith", role: "CTO & Co-founder", messageIcon: icon5, twitterIcon: icon6, imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Emily Brown", role: "Head of Product", messageIcon: icon5, twitterIcon: icon6, imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Alex jhonson", role: "Lead Designer", messageIcon: icon5, twitterIcon: icon6, imageUrl: "https://images.pexels.com/photos/4192307/pexels-photo-4192307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
];

const EstateinTeam: React.FunctionComponent<IEstateinTeamProps> = (props) => {
    return <section className="pt-16 lg:pt-40 pb-8 bg-gradient-to-tr from-gray-900 to-gray-950 backdrop-blur-2xl">
        <div className="container px-4 max-w-7xl mx-auto">
            <h2 className="text-2xl lg:text-3xl text-white font-semibold  mb-6">Meet the Estatein Team</h2>
            <p className='text-gray-500 leading-relaxed pb-6'>
                Get to know the talented individuals behind Estatein who are dedicated to creating innovative solutions to meet your needs.
                They bring diverse expertise and a shared passion for excellence to every project, ensuring that you receive the best possible service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-gray-500 bg-opacity-5 backdrop-blur-lg rounded-lg shadow-md p-6">
                        <Image className=' lg:h-64 object-cover rounded-3xl mx-auto' width={400} height={400} src={member.imageUrl} alt={member.name} />
                        <Image className='mx-auto -mt-6 cursor-pointer' width={50} height={50} src={member.twitterIcon} alt='icon' />
                        <h3 className="text-xl font-semibold mb-2 text-white text-center pt-3">{member.name}</h3>
                        <p className="text-gray-600 text-center text-sm">{member.role}</p>

                        <div className='w-full rounded-3xl bg-slate-800 py-2 px-3 mt-5 flex justify-between items-center'> 
                        <p className='text-white'>Say Hello!</p>
                        <Image src={member.messageIcon} width={40} height={40} alt='message icon' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>;
};

export default EstateinTeam;
