import Link from 'next/link';
import * as React from 'react';
import notFoundImg from "@/assets/images/abstructs/404.png"
import Image from 'next/image';

interface INotFoundPageProps {
}

const NotFoundPage: React.FunctionComponent<INotFoundPageProps> = (props) => {
    return <div className='min-h-screen  flex items-center justify-center w-full h-full bg-gradient-to-t from-black to-gray-900 backdrop-blur-2xl text-center'>
        <div>
            <Image className='w-full  lg:min-h-80' src={notFoundImg} width={500} height={500} alt="Image not found " />


            <h3 className='text-3xl sm:text-5xl font-bold '>Page not found</h3>

            <p className='text-gray-600 py-5'>Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.</p>

            <Link href="/">
                <button className='px-5 py-2  rounded bg-red-400 text-white   font-semibold hover:bg-red-500'>Back to homepage</button>
            </Link>

        </div>


    </div>;
};

export default NotFoundPage;
