import * as React from 'react';

interface IBannerProps {
}

const Banner: React.FunctionComponent<IBannerProps> = (props) => {
    return <>
        <div className='min-h-screen flex items-center justify-center w-full h-full bg-no-repeat bg-cover backdrop-blur-3xl' style={{ backgroundImage: "url(https://w.forfun.com/fetch/3c/3cd2b06c8b9e346a2a0fecfded9e54ce.jpeg" }}>
            <div>
                <p className='text-red-400'>Your Guide to Goal Mastery Taking  <span className='text-white'>Step&apos;s</span></p>
                <h3 className='text-2xl md:text-3xl lg:text-5xl py-3 text-white tracking-wider font-bold'>Master Your Goals<br />One Step at a Time</h3>

                <div className='flex space-x-3 pt-3'>
                    <button className='lg:px-7 lg:py-3 px-5 py-2 rounded text-red-500 text-white text-lg font-semibold'>Get Started</button>
                    <button className='lg:px-7 lg:py-3 px-5 py-2 rounded bg-white text-red-400 text-lg font-semibold'>Take Steps</button>
                </div>
            </div>
        </div>
    </>;
};

export default Banner;
