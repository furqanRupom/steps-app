
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { Button, Card, Divider, Icon, ProgressCircle } from "@tremor/react";
import { getServerSession } from "next-auth";
import { userData } from "@/services/actions/server";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { RiMailAddLine, RiNumber1 } from "@remixicon/react";
import { FaAddressBook, FaMailBulk } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { AiFillQuestionCircle } from "react-icons/ai";
import CircleProgressBar from "@/components/UI/progress/CircleProgressBar";
import Statistics from "../profile/user/Statistics";
import { pendingData, performanceData, successData } from "@/constants/profile/StatisticsData";
import ProgressOverview from "../profile/user/ProgressOverview";
import CompleteDueTasks from "../profile/user/CompleteDueTasks";

export const metadata: Metadata = {
    title: "Next.js Profile | TailAdmin - Next.js Dashboard Template",
    description:
        "This is Next.js Profile page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};
interface IUserProfileProps {

}

const UserProfile: React.FunctionComponent<IUserProfileProps> = async () => {
    const session = await getServerSession(options);
    const email = session?.user.email;
    const user = await userData(email as string);

    return (


        <section className="p-8 ">
            {/* card */}

            <div className="grid grid-cols-1 xl:grid-cols-[5fr,2fr] gap-10">
                <div>
                    <Card className="grid grid-cols-1 xl:grid-cols-[4fr,2fr] gap-10">
                        <div className=" rounded-2xl flex flex-col md:flex-row space-y-2 space-x-5 md:space-y-0 items-center justify-center ">
                            <div className="flex py-3 md:py-0">
                                <div className="w-24 h-40 bg-gradient-to-tr from-red-500 to-red-600 rounded-2xl"></div>
                                <Image className="mx-auto -ml-20 mt-2  ring ring-red-500 w-36 h-36 object-cover rounded-full" src={user?.profilePhoto as string} width={200} height={200} alt="profile image" />
                            </div>
                            <div >
                                <h3 className=" text-red-400 font-bold text-4xl">{user?.name}</h3>
                                <div className="text-gray-400 text-md flex items-center space-x-1 py-1">

                                    <small><FiMail /></small>
                                    <p>{user?.email}</p>

                                </div>
                                <div className="text-gray-400 text-md flex items-center space-x-1 ">
                                    <small><FiPhone /></small>
                                    <p> {user?.contactNumber}</p>

                                </div>
                                <div className="text-gray-400 text-md flex items-center space-x-1 ">
                                    <small><FaAddressBook /></small>
                                    <p> {user?.address}</p>

                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-tr from-gray-950 to-slate-900 rounded-2xl shadow p-5 md:p-4 flex text-center md:text-left items-center justify-center">
                            <div>
                                <h3 className="text-xl font-bold tex-gray-400">Start where you left?</h3>
                                <p className="py-2 text-gray-600">Completed your previous tasks.</p>
                                <Button color="red">start your task again</Button>
                            </div>
                        </div>

                    </Card>

                    <ProgressOverview />
                    <CompleteDueTasks />

                </div>


                <div>
                    <Card className="w-full h-full">
                        <div>
                            <h3><AiFillQuestionCircle /></h3>
                            {/* circle */}
                            <CircleProgressBar  radius={70} strokeWidth={10} color="red" value={30} />



                        </div>







                        <div>
                            <h3 className="py-5">Statistics</h3>

                            <div className="space-y-3">

                                <Statistics title="Performnace" description="based on Deadline" chartData={performanceData} />
                                <Statistics title="Success" description="based on task completed" chartData={successData} />
                                <Statistics title="Pending" description="based on pending tasks" chartData={pendingData} />
                            </div>

                        </div>


                    </Card>
                </div>


            </div>



        </section>

    );
};

export default UserProfile;