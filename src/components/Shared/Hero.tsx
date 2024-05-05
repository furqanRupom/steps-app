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


            <section className='relative bg-gradient-to-tr from-slate-900 to-gray-950  z-20'>
                <div className="mx-auto  h-full w-full  z-20  ">
                    <div className="container  grid grid-cols-1 lg:grid-cols-2 justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 w-full">
                        <div className="flex items-center justify-center p-10 mt-8 lg:mt-0 6   w-full">
                            <Image
                        
                                src={props.imgUrl}
                                alt=""
                                width={props.size ? props.size as number : 500}
                                height={props.size ? props.size as number : 500}
                                className="object-contain "
                            />
                        </div>
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm  lg:text-left ">
                            <h1 className="text-3xl   leading-none sm:text-4xl lg:text-5xl w-full">
                                <span className='text-red-400 text-base tracking-widest'>{props.title}</span>
                                <br />
                                <span className="text-gray-50  font-extrabold">{props.secTitle}</span>
                            </h1>
                            <p className="mt-6 mb-8 text-lg text-gray-600 sm:mb-5">
                                {props.description}
                            </p>
                            {
                                props.isButton && <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                    <button
                                        className="px-8 py-3 text-lg font-semibold rounded bg-red-500 hover:bg-red-600 "
                                    >
                                        {props.buttonFirstText}
                                    </button>
                                    <button
                                        className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
                                    >
                                        {props.buttonSecondText}
                                    </button>
                                </div>
                            }
                        </div>


                    </div>
                </div>

                <div
                    className="mx-auto transform rotate-180  absolute bg-gradient-to-b from-gray-950 via-slate-800 to-gray-950  bottom-0 h-20 lg:h-64 w-full -z-10"
                    style={{
                        clipPath: "polygon(100% 0%, 0% 0%, 0% 65%, 1% 64.95%, 2% 64.8%, 3% 64.6%, 4% 64.3%, 5% 63.9%, 6% 63.45%, 7% 62.9%, 8% 62.25%, 9% 61.55%, 10% 60.8%, 11% 59.95%, 12% 59.05%, 13% 58.1%, 14% 57.1%, 15% 56.05%, 16% 55%, 17% 53.9%, 18% 52.8%, 19% 51.65%, 20% 50.5%, 21% 49.35%, 22% 48.2%, 23% 47.05%, 24% 45.9%, 25% 44.8%, 26% 43.75%, 27% 42.75%, 28% 41.75%, 29% 40.8%, 30% 39.9%, 31% 39.1%, 32% 38.35%, 33% 37.65%, 34% 37.05%, 35% 36.5%, 36% 36.05%, 37% 35.65%, 38% 35.35%, 39% 35.15%, 40% 35.05%, 41% 35%, 42% 35.05%, 43% 35.2%, 44% 35.45%, 45% 35.75%, 46% 36.15%, 47% 36.65%, 48% 37.2%, 49% 37.85%, 50% 38.55%, 51% 39.35%, 52% 40.2%, 53% 41.1%, 54% 42.05%, 55% 43.05%, 56% 44.1%, 57% 45.15%, 58% 46.3%, 59% 47.4%, 60% 48.55%, 61% 49.7%, 62% 50.85%, 63% 52%, 64% 53.15%, 65% 54.25%, 66% 55.35%, 67% 56.4%, 68% 57.45%, 69% 58.4%, 70% 59.35%, 71% 60.2%, 72% 61.05%, 73% 61.8%, 74% 62.45%, 75% 63.05%, 76% 63.6%, 77% 64.05%, 78% 64.4%, 79% 64.7%, 80% 64.85%, 81% 65%, 82% 65%, 83% 64.9%, 84% 64.75%, 85% 64.5%, 86% 64.2%, 87% 63.75%, 88% 63.25%, 89% 62.7%, 90% 62.05%, 91% 61.3%, 92% 60.5%, 93% 59.65%, 94% 58.75%, 95% 57.8%, 96% 56.8%, 97% 55.75%, 98% 54.65%, 99% 53.55%, 100% 52.4%)",
                    }}
                />
            </section>


        </>

    );
};

export default Hero;
