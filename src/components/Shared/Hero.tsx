import Image from 'next/image';
import * as React from 'react';

interface IHeroProps {
    title: string;
    secTitle: string;
    buttonFirstText?: string;
    buttonSecondText?: string;
    description: string;
    imgUrl: string;
    size?: string | number;
    isButton: boolean;
}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
    const backgroundGradient = {
        backgroundImage: 'linear-gradient(to right, #FF6B6B, #FF8E53)',
    };

    return (

        <>


            <>
                <section

                    style={{
                        background: "url('https://wallpapers.com/images/hd/gradient-background-7xsdz99i2ljokhwn.jpg'),rgba(255, 0, 150, 0.3",
                        backgroundSize: "cover",
                        backgroundPosition:"100% 100%",
                        backgroundBlendMode:"multiply",
                        position:"relative"
             
                    }}
                >

                    <div className='absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950 opacity-90 lg:opacity-70 backdrop-blur-lg'></div>


                    <div className="mx-auto h-full ">
                        <div className="container flex justify-center p-8 py-12 mx-auto sm:py-12 lg:pt-32 lg:py-1 w-full">
                            <div className="flex flex-col justify-center p-6 max-w-5xl mx-auto text-center rounded-sm text-gray-50 z-30">
                                <h1>
                                    <span className="text-red-400 text-base font-[cursive] tracking-widest">{props.title}</span>
                                </h1>
                                <h3 className="font-bold py-3 leading-relaxed text-3xl sm:text-4xl lg:text-6xl">{props.secTitle}</h3>
                                <p className="mt-6 mb-8 text-lg text-gray-500">{props.description}</p>
                                {props.isButton && (
                                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mx-auto">
                                        <button className="px-8 py-3 text-lg font-semibold rounded bg-red-500 hover:bg-red-600">{props.buttonFirstText}</button>
                                        <button className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">{props.buttonSecondText}</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </>


        </>

    );
};

export default Hero;
