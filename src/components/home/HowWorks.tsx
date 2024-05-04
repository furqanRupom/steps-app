
"use client"
import React from "react";

const HowItWorks: React.FC = () => {
    return (
        <section id="works" className="relative  py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl  ">
                    <h2 className="text-2xl text-white font-extrabold mx-auto md:text-3xl ">
                        How does it work?
                    </h2>
                    <p className="max-w-2xl mx-auto mt-4 text-base text-gray-600 leading-relaxed md:text-2xl">
                        Track and achieve your goals effortlessly.
                    </p>
                </div>
                <div className="relative mt-12 lg:mt-20">
                    <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                        <img
                            alt=""
                            loading="lazy"
                            width={1000}
                            height={500}
                            decoding="async"
                            data-nimg={1}
                            className="w-full"
                            style={{ color: "transparent" }}
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                        />
                    </div>
                    <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-900  rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-300">1</span>
                            </div>
                            <h3 className="mt-6 text-xl  text-gray-500 font-semibold leading-tight md:mt-10">
                                Set Your Goals
                            </h3>
                            <p className="mt-4 text-base text-gray-300 md:text-lg">
                                Choose your goals and define them clearly.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-900 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-300">2</span>
                            </div>
                            <h3 className="mt-6 text-xl text-gray-500 font-semibold leading-tight md:mt-10">
                                Plan Your Tasks
                            </h3>
                            <p className="mt-4 text-base text-gray-400 md:text-lg">
                                Break down your goals into actionable tasks.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-900   rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-300">3</span>
                            </div>
                            <h3 className="mt-6 text-xl text-gray-500 font-semibold leading-tight md:mt-10">
                                Track Progress
                            </h3>
                            <p className="mt-4 text-base text-gray-400 md:text-lg">
                                Monitor your progress and adjust your plan as needed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
                style={{
                    background:
                        "radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)"
                }}
            ></div>
        </section>
    );
};

export default HowItWorks;
