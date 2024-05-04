"use client"
import axios, { AxiosError } from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import {useRouter} from "next/navigation"
import registerSchemaValidation from '@/lib/validation/auth/register.validation';
import { Button } from '@tremor/react';


interface IRegisterFormProps {
}

interface IRegisterData {
    name:string;
    email:string;
    password:string;
    contactNumber:string;
    profilePhoto:string;
    address:string;
}

const RegisterForm: React.FunctionComponent<IRegisterFormProps> = (props) => {
  const {register,handleSubmit} = useForm<IRegisterData>()
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter();


  const handleRegisterSubmit = async (data:IRegisterData) => {
    const toastId = toast.loading("Registration on process...")
    setIsLoading(true);
   try {

    const res = await axios.post('/api/register',data);
    if(res.data.success){
        toast.success("user Registration successfully !",{id:toastId});
        router.push("/login");
        setIsLoading(false)
    }
   } catch (error : any) {
       toast.error(error.message, { id: toastId });
       router.push("/login");
       setIsLoading(false);
   }
  };

  return <section>
      <section className='min-h-screen w-full h-full bg-gradient-to-t from-black to-gray-900 backdrop-blur-2xl py-10 '>
          <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-20'>
              <Image loading="lazy" className='hidden lg:block' src="https://i.ibb.co/GpmwCCS/login-illustrator.png" width={800} height={400} alt='login image' />
              <div>
                  <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-500 bg-opacity-5 backdrop-blur-lg">
                      <h1 className="text-3xl text-center mb-8 text-white">Register for <span className='text-red-400'>Steps</span></h1>
                      <form onSubmit={handleSubmit(handleRegisterSubmit)}>
                        <div className='grid grid-cols-2 gap-3 w-full'>

                          <div className="mb-4">
                              <label htmlFor="name" className="block text-gray-400 text-sm font-bold mb-2">
                                  Name
                              </label>
                              <input
                                  type="text"
                                  id="name"
                                  {...register("name")}
                                  className="w-full px-3 py-2 border border-gray-600 rounded-md text-gray-400 bg-gray-900 focus:outline-none focus:border-red-400"
                                  placeholder="Enter your name"
                                  required
                              />
                          </div>
                          <div className="mb-4">
                              <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">
                                  Email
                              </label>
                              <input
                                  type="email"
                                  id="email"
                                  {...register("email")}
                                  className="w-full px-3 py-2 border border-gray-600 rounded-md text-gray-400 bg-gray-900 focus:outline-none focus:border-red-400"
                                  placeholder="Enter your email"
                                  required
                              />
                          </div>
                        </div>
                          <div className="mb-4">
                              <label htmlFor="contactNumber" className="block text-gray-400 text-sm font-bold mb-2">
                                  Contact Number
                              </label>
                              <input
                                  type="text"
                                  id="contactNumber"
                                  {...register("contactNumber")}
                                  className="w-full px-3 py-2 border border-gray-600 rounded-md text-gray-400 bg-gray-900 focus:outline-none focus:border-red-400"
                                  placeholder="Enter your contact number"
                              />
                          </div>
                          <div className="mb-4">
                              <label htmlFor="profilePhoto" className="block text-gray-400 text-sm font-bold mb-2">
                                  Profile Photo
                              </label>
                              <input
                                  type="text"
                                  id="profilePhoto"
                                  {...register("profilePhoto")}
                                  className="w-full px-3 py-2 border border-gray-600 rounded-md text-gray-400 bg-gray-900 focus:outline-none focus:border-red-400"
                                  placeholder="Enter URL of your profile photo"
                              />
                          </div>
                          <div className="mb-4">
                              <label htmlFor="password" className="block text-gray-400 text-sm font-bold mb-2">
                                  Password
                              </label>
                              <input
                                  type="password"
                                  id="password"
                                  {...register("password")}
                                  className="w-full px-3 py-2 border border-gray-600 rounded-md text-gray-400 bg-gray-900 focus:outline-none focus:border-red-400"
                                  placeholder="Enter your password"
                                  required
                              />
                          </div>
                          <div className="mb-4">
                              <label htmlFor="address" className="block text-gray-400 text-sm font-bold mb-2">
                                  Address
                              </label>
                              <textarea
                                  id="address"
                                  {...register("address")}
                                  className="w-full px-3 py-2 border border-gray-600 rounded-md text-gray-400 bg-gray-900 focus:outline-none focus:border-red-400"
                                  placeholder="Enter your address"
                              ></textarea>
                          </div>
                          <Link
                              href="/login"
                              className="text-sm text-gray-400  hover:underline focus:outline-none focus:underline"
                          >
                              Already have an account? sign in
                          </Link>
                          <Button
                             color='red'
                             loading={isLoading}
                              type="submit"
                              className="w-full bg-red-400 mt-4 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          >
                             Register
                          </Button>
                      </form>
                  </div>
              </div>
          </div>
      </section>
  </section>;
};

export default RegisterForm;
