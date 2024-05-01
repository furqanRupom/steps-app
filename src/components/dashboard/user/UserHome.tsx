import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import * as React from 'react';

interface IAppProps {
}

const UserDashboard: React.FunctionComponent<IAppProps> = async(props) => {
    const session = await getServerSession(options);
    const name = session?.user.name;
  return <>
      <section className='grid  grid-cols-1 lg:grid-cols-[6fr,2fr] mx-auto  p-10 w-full gap-5 '>
          <div className=" flex flex-col lg:flex-row items-center  overflow-hidden  rounded-3xl  text-slate-500  w-full bg-gradient-to-tr from-gray-900 to-gray-950 backdrop-blur-2xl r">
   
              {/*  <!-- Body--> */}
              <div className=" p-6 sm:mx-6 sm:px-0">
                  <header className=" text-xl lg:text-2xl font-semibold">
                     
                      <h3 className='text-white tracking-wide'>Welcome back <span className='text-red-400'>{name}</span></h3>
                  </header>
                  <p className='py-3 leading-relaxed'>
                    Start your tracking again. make you more productive just one steps away you are !
                  </p>

                  <button className='text-red-400 mt-5 bg-slate-900 font-semibold px-7 py-3 rounded-lg hover:bg-gray-800'>Steps Now</button>
              </div>

              <figure >
                  <img
                      src="https://i.postimg.cc/9Fk8pJ22/Untitled-design-4-removebg-preview.png"
                      alt="card image"
                      className="object-cover min-h-full aspect-auto"
                  />
              </figure>
          </div>



          <div >
              <div className="max-w-md mx-auto  bg-gradient-to-tr from-gray-900 to-gray-950 backdrop-blur-2xl shadow-lg rounded-3xl overflow-hidden h-full">
                  <div className="px-6 py-4  bg-gradient-to-tr from-gray-900 to-gray-950 backdrop-blur-2xl  flex items-center justify-between">
                      <h2 className="font-bold text-lg text-gray-400">Goals & Tasks Progress</h2>
                      <div className="flex items-center">
                          <span className="text-sm text-gray-600 mr-2"><i className="ri-goal-line"></i> Goals: 10</span>
                          <span className="text-sm text-gray-600"><i className="ri-task-line"></i> Tasks: 20</span>
                      </div>
                  </div>

                  <div className="px-6 py-4">
                      <div className="flex items-center justify-between mb-2">
                          <p className="text-sm font-semibold text-gray-600">Goals</p>
                          <span className="text-xs text-gray-500">70% completed</span>
                      </div>
                      <div className="bg-gray-800 h-6 rounded-full relative">
                          <div className="bg-red-400 h-full rounded-full w-[70%]" ></div>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                              <span className="text-xs text-gray-50">7/10</span>
                          </div>
                      </div>
                  </div>

                  <div className="px-6 py-4">
                      <div className="flex items-center justify-between mb-2">
                          <p className="text-sm font-semibold text-gray-600">Tasks</p>
                          <span className="text-xs text-gray-500">50% completed</span>
                      </div>
                      <div className="bg-gray-800 h-6 rounded-full relative">
                          <div className="bg-gray-200 h-full rounded-full w-[50%] " ></div>
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                              <span className="text-xs text-gray-50">10/20</span>
                          </div>
                      </div>
                  </div>

                  <button className='text-red-400  font-bold mx-12 my-12 lg:mt-5 bg-slate-900 px-7 py-3 rounded-lg hover:bg-gray-800'>view taks and goals</button>
              </div>

           
          </div>
      </section>

   
  </>;
};

export default UserDashboard;
