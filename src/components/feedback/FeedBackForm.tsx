import Image from 'next/image';
import * as React from 'react';

interface IFeedbackFormProps { }

const FeedbackForm: React.FunctionComponent<IFeedbackFormProps> = (props) => {
    return (
        <section className='min-h-screen w-full h-full bg-gradient-to-t from-black to-gray-900 backdrop-blur-2xl py-20'>
            <div className=' max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-20'>

                <div className='hidden lg:block'>
                    <Image className='object-cover' src="https://i.ibb.co/64fS9qc/feedback.png" width={400} height={400} alt="feedback image" />
                </div>
                <div className=' w-full mx-auto mt-10 p-6 bg-gray-500 bg-opacity-5 backdrop-blur-lg'>
                    <h1 className='text-3xl text-center mb-8 text-white'>Give your valuable <span className='text-red-400'>Feedback</span></h1>
                    <form>
                        <div className='mb-4'>
                            <label htmlFor='name' className='block text-gray-400 text-sm font-bold mb-2'>
                                Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                className='w-full px-3 py-2 border border-gray-600 rounded-md text-gray-400 bg-gray-900 focus:outline-none focus:border-red-400'
                                placeholder='Enter your name'
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='email' className='block text-gray-400 text-sm font-bold mb-2'>
                                Email
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                className='w-full px-3 py-2 border border-gray-600 rounded-md text-gray-400 bg-gray-900 focus:outline-none focus:border-red-400'
                                placeholder='Enter your email'
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='message' className='block text-gray-400 text-sm font-bold mb-2'>
                                Feedback
                            </label>
                            <textarea
                                id='message'
                                name='message'
                                rows={4}
                                className='w-full px-3 py-2 border border-gray-600 rounded-md text-gray-400 bg-gray-900 focus:outline-none focus:border-red-400'
                                placeholder='Enter your feedback'
                            ></textarea>
                        </div>
                        <button
                            type='submit'
                            className='w-full bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FeedbackForm;
