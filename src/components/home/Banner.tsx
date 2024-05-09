import * as React from 'react';
import largerDeviceImage from "@/assets/images/banner/larger-device.png"
import smallerDeviceImage from "@/assets/images/banner/smaller-device.png"
import Image from 'next/image';

interface IBannerProps {
}


const Banner: React.FunctionComponent<IBannerProps> = (props) => {
    return <>
        <div className='min-h-screen  w-full h-full bg-no-repeat bg-cover backdrop-blur-3xl' style={{ backgroundImage: "url(https://w.forfun.com/fetch/3c/3cd2b06c8b9e346a2a0fecfded9e54ce.jpeg)" }}>
            <div className='w-full h-full flex items-center justify-center pt-40'>
                <div className='text-center'>
                <p className='text-red-400'>Your Guide to Goal Mastery Taking  <span className='text-white'>Step&apos;s</span></p>
                <h3 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl py-3 text-white font-bold'>Master Your Goals<br />One Step at a Time</h3>
                <div className='flex space-x-3 pt-3'>
                    <button className='lg:px-7 mx-auto lg:py-3 px-5 py-2 rounded bg-red-500 text-white text-lg font-semibold'>Get Started</button>
                </div>
                </div>

            </div>
            <div className='w-full mx-auto  pt-12 md:px-12 lg:px-3'>
                <Image priority className='object-cover hidden md:block rounded-xl shadow border-2 border-t-red-400 border-l-red-400 mx-auto border-r-red-400 border-b-0' width={1000} height={1000} src={largerDeviceImage} alt="banner image one" />
                <Image priority className='object-cover  md:hidden rounded-xl shadow border-2 border-t-red-400 border-l-red-400 mx-auto border-r-red-400 border-b-0' width={200} height={200} src={smallerDeviceImage} alt="banner image one" />
            </div>

        </div>
    </>;
};

export default Banner;
