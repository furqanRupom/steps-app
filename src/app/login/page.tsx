import Image from 'next/image';
import * as React from 'react';

interface ILoginPageProps {
}
export const metadata = {
    title:"Steps | login",
    description:"login as annyomous and leave as our guest"
}
const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    return <section className='min-h-screen   w-full h-full bg-gradient-to-t from-black to-gray-900 backdrop-blur-2xl py-20 '>

        <div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-20'>

            <Image loading="lazy" className='hidden lg:block' src="https://i.ibb.co/sFk4Wb8/Illustration-1.png" width={400} height={400} alt='login image' />


            <div>
                <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-500 bg-opacity-5 backdrop-blur-lg ">
                    <h1 className="text-3xl text-center mb-8 text-white">Welcome to <span className='text-red-400'>Steps</span></h1>
                    <div className="flex justify-center space-x-4 mb-6">
                        <button className="flex items-center bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-600">
                            <svg
                                className="w-6 h-6 mr-2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="currentColor"
                                    d="M23.955 11.226c0-.64-.056-1.252-.156-1.848H12v3.496h6.117c-.258 1.414-.977 2.663-2.058 3.47v2.292h3.34c1.958-1.803 3.088-4.447 3.088-7.41z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 24c2.785 0 5.117-.93 6.803-2.528l-3.34-2.292c-.927.625-2.09 1.01-3.463 1.01-2.652 0-4.89-1.783-5.689-4.183H.955v2.618C2.623 21.55 7.056 24 12 24z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M6.311 14.31c-.19-.562-.299-1.167-.299-1.79s.11-1.227.299-1.79H6V7.312H2.955a12.054 12.054 0 0 0 0 9.376L6 14.31v-.001z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 4.952c1.412 0 2.69.485 3.69 1.438l2.777-2.777C17.116 1.435 14.784 0 12 0 7.056 0 2.623 2.45.955 5.784l3.341 2.616c.798-2.4 3.036-4.183 5.689-4.183z"
                                />
                            </svg>
                            Login with Google
                        </button>
                        <button className="flex items-center bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-600">
                            <svg
                                className="w-6 h-6 mr-2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="currentColor"
                                    d="M19.5 2H4.5C3.12 2 2 3.12 2 4.5v15c0 1.38 1.12 2.5 2.5 2.5h15c1.38 0 2.5-1.12 2.5-2.5v-15c0-1.38-1.12-2.5-2.5-2.5zm-9 16v-6H7.5v-3h3V7.5c0-1.95 1.05-3.5 3.5-3.5s3.5 1.55 3.5 3.5-1.05 3.5-3.5 3.5c-.79 0-1.45-.26-2-1.5h-3v3h3v6h-4z"
                                />
                            </svg>
                            Login with GitHub
                        </button>
                    </div>
                    <div className="relative mb-6">
                        <hr className="absolute left-0 w-full border-gray-900" />
                        <div className="text-center relative z-10  px-4 text-gray-100">
                            Or
                        </div>
                    </div>
                    <form>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-400  text-sm font-bold mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 border border-gray-600 rounded-md text-gray-400 bg-gray-900 focus:outline-none focus:border-red-400"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-gray-400  text-sm font-bold mb-2"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-3 py-2 border border-gray-600 rounded-md text-gray-400 bg-gray-900 focus:outline-none focus:border-red-400"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <a
                                href="#"
                                className="text-sm text-blue-500 hover:underline focus:outline-none focus:underline"
                            >
                                Forgot password?
                            </a>
                            <a
                                href="#"
                                className="text-sm text-gray-400 bg-gray-900 hover:underline focus:outline-none focus:underline"
                            >
                                New to Steps? Register
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>;
};

export default LoginPage;
