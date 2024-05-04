import Image from 'next/image';
import * as React from 'react';

interface IHeroProps {
    title:string;
    secTitle:string
    buttonFirstText:string;
    buttonSecondText:string;
    description:string;
    imgUrl:string

}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
    return <section className="text-gray-400 body-font max-w-7xl mx-auto">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="  lg:text-3xl mb-4 font-medium text-white">
                <span className='text-base text-red-400 tracking-widest'>{props.title}</span>
                    <br className="inline-block" />
                    {props.secTitle}
                </h1>
                <p className="mb-8 leading-relaxed">
                    {props.description}
                </p>
                <div className='flex space-x-3 pt-3'>
                    <button className='lg:px-7 lg:py-3 px-5 py-2 rounded bg-red-400 text-white text-lg font-semibold'>{props.buttonFirstText}</button>
                    <button className='lg:px-7 lg:py-3 px-5 py-2 rounded bg-white text-red-400 text-lg font-semibold'>{props.buttonSecondText}</button>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Image
                    width={500}
                    height={500}
                    className="object-cover object-center rounded"
                    alt="hero"
                    src={props.imgUrl}
                />
            </div>
        </div>
    </section>
;
};

export default Hero;
