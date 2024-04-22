
"use client"
import * as React from 'react';
import icon1 from "@/assets/images/icons/icon1.png"
import icon2 from "@/assets/images/icons/icon2.png"
import icon3 from "@/assets/images/icons/icon3.png"
import icon4 from "@/assets/images/icons/icon4.png"
import Image from 'next/image';

interface IValuesProps {
}

const values = [
    {
        iconsPath: icon1,
        heading: "Transparency",
        description: "We believe in transparency at every level of our organization. We strive to be open and honest in our communication with users, ensuring clarity and trust in all interactions."
    },
    {
        iconsPath: icon2,
        heading: "Empowerment",
        description: "We empower users to take control of their personal development journey. We provide tools, resources, and support to help users set and achieve their goals."
    },
    {
        iconsPath: icon3,
        heading: "Inclusivity",
        description: "We embrace diversity and inclusivity in our community. We celebrate the unique perspectives, backgrounds, and experiences of all users."
    },
    {
        iconsPath: icon4,
        heading: "Continuous Improvement",
        description: "Encourage user feedback through surveys, feedback forms, and user testing sessions. Regularly review and prioritize feature requests and bug reports to drive improvements."
    },
]



const Values: React.FunctionComponent<IValuesProps> = (props) => {
    return <section className='pt-16 pb-8 bg-gradient-to-tr from-gray-900 to-gray-950 backdrop-blur-2xl '>

        <section className='grid grid-cols-1 lg:grid-cols-[2fr,3fr] max-w-7xl mx-auto gap-10 items-center px-8 lg:px-0'>

            <div>
                <h3 className='text-xl lg:text-3xl font-semibold pb-5 text-white'>Our Values</h3>
                <p className='text-gray-500 leading-relaxed'>
                    At Steps, we are committed to upholding core values that guide our interactions with users, shape our decisions, and define our culture. These values reflect our dedication to creating a supportive and empowering environment for our community.
                </p>

            </div>


            <div className='grid grid-cols-1 lg:grid-cols-2 text-white gap-10 bg-gray-500 bg-opacity-5 backdrop-blur-lg p-5'>
                {
                    values.map((value) => <article>
                        <div className='flex items-center space-x-2 pb-5'>

                            <Image width={40} src={value.iconsPath} alt='icon' />
                            <h3>{value.heading}</h3>
                        </div>
                        <p className=' leading-relaxed text-gray-400'>{value.description}</p>
                    </article>)
                }



            </div>
        </section>

    </section>;
};

export default Values;
