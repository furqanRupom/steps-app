"use client"
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Button } from '@tremor/react';

interface ILoginFormProps {
}


interface ILoginData {
    email: string;
    password: string;
}

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {

    /* handle login form  */
    const { register, handleSubmit } = useForm<ILoginData>();
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const router = useRouter();

    const handleLoginSubmit = async (data: ILoginData) => {
        const toastId = toast.loading("Login on process...");
        setIsLoading(true);
        try {
            const res = await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false
            })

            if (res?.ok) {
                toast.success("user login successfully !", { id: toastId });
                router.push("/dashboard");
                setIsLoading(false);
            }


        } catch (error: any) {
            toast.error(error.message, { id: toastId })
            setIsLoading(false);
            console.log(error)
            // router.push("/login")

        }
    }
    return <>
        <section className='min-h-screen   w-full h-full bg-gradient-to-t from-black to-gray-900 backdrop-blur-2xl py-44 '>

            <div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-20'>

                <Image loading="lazy" className='hidden lg:block' src="https://i.postimg.cc/vTwv4JGL/Illustration-1.png" width={400} height={400} alt='login image' />


                <div>
                    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-500 bg-opacity-5 backdrop-blur-lg ">
                        <h1 className="text-3xl text-center mb-8 text-white">Welcome to <span className='text-red-400'>Steps</span></h1>



                        <form onSubmit={handleSubmit(handleLoginSubmit)}>
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
                                    {...register("email")}
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
                                    {...register("password")}
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
                                <Link
                                    href="/register"
                                    className="text-sm text-gray-400  hover:underline focus:outline-none focus:underline"
                                >
                                    New to Steps? Register
                                </Link>
                            </div>
                            <Button
                                variant='primary'
                                type="submit"
                                color='red'
                                loading={isLoading}
                                className="w-full text-red-500  hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Login
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>;
};

export default LoginForm;
