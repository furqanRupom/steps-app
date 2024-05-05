import Image from 'next/image';
import * as React from 'react';

interface IFeedbackFormProps { }

const FeedbackForm: React.FunctionComponent<IFeedbackFormProps> = (props) => {
    return (
        <section className='bg-gradient-to-t from-gray-900 to-gray-950 py-20'>
            <div className=' max-w-5xl mx-auto items-center justify-items-center gap-20'>

                
                <div className=' w-full mx-auto p-6'>
                    <h1 className='text-3xl lg:text-5xl text-center mb-8 text-white'>Give your valuable <span className='text-red-400'>Feedback</span></h1>
                    <form>
                        <div className='grid grid-cols-1 lg:grid-cols-2  lg:gap-10'>
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
                        </div>
                      
                        <div className='mb-4'>
                            <label htmlFor='rating' className='block text-gray-400 text-sm font-bold mb-2'>
                                Rating
                            </label>
                            <select
                                id='rating'
                                name='rating'
                                className='w-full px-3 py-2 border border-gray-600 rounded-md text-gray-400 bg-gray-900 focus:outline-none focus:border-red-400'
                            >
                                <option value='5'>Excellent</option>
                                <option value='4'>Good</option>
                                <option value='3'>Average</option>
                                <option value='2'>Below Average</option>
                                <option value='1'>Poor</option>
                            </select>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='category' className='block text-gray-400 text-sm font-bold mb-2'>
                                Category
                            </label>
                            <select
                                id='category'
                                name='category'
                                className='w-full px-3 py-2 border border-gray-600 rounded-md text-gray-400 bg-gray-900 focus:outline-none focus:border-red-400'
                            >
                                <option value='feature'>Feature Request</option>
                                <option value='bug'>Bug Report</option>
                                <option value='general'>General Feedback</option>
                            </select>
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
                            className='w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
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
