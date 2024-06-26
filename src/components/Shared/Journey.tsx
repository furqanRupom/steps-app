import * as React from 'react';
import abstract1 from "@/assets/images/abstructs/abstract2.png"
import abstract2 from "@/assets/images/abstructs/abstract1.png"
import Image from 'next/image';
interface IJourneyProps {
}

const Journey: React.FunctionComponent<IJourneyProps> = (props) => {
    return <section className='w-full h-full  relative  pt-3 lg:pt-32 '>
        <div className='absolute left-0 bottom-0 overflow-hidden '>
            <Image width={400} height={200} src={abstract1} alt='abstract image' />
        </div>

        <div className='absolute right-0 bottom-0 overflow-hidden '>
            <Image width={400} height={200} src={abstract2} alt='abstract image' />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-[2fr,1fr] w-full h-full min-h-[300px] px-8 mx-auto items-center   max-w-7xl '>

            <div className='z-10'>
                <h1 className="text-xl lg:text-4xl pb-3 text-white">
                    Elevate Your Journey with Steps
                </h1>
                <p className='text-gray-400 text-sm lg:text-base'>
                    Elevate your journey with Steps and transform the way you approach your goals. Whether you are striving for personal growth or professional success, Steps provides the tools and support you need to stay organized, motivated, and on track. With its seamless and intuitive features, Steps empowers you to turn your aspirations into achievements, one step at a time.


                </p>

            </div>

            <div className=' lg:ml-auto z-10'>
                <button className="text-lg lg:text-xl px-5 py-2 lg:px-9 lg:py-3 rounded-md bg-red-500 hover:bg-red-600 duration-500 font-semibold text-white">
                    Explore Now
                </button>
            </div>

        </div>
    </section>;
};

export default Journey;
