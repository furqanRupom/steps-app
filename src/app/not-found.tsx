import Link from 'next/link';
import * as React from 'react';

interface INotFoundPageProps {
}

const NotFoundPage: React.FunctionComponent<INotFoundPageProps> = (props) => {
    return <div className='min-h-screen  flex items-center justify-center w-full h-full bg-gradient-to-t from-black to-gray-900 backdrop-blur-2xl text-center'>
        <div>
            <h1 className="text-7xl font-bold text-white italic">404</h1>
            <h1 className="text-5xl font-bold text-red-400 py-5">Page not found </h1>

            <Link href="/">
                <button className='px-7 py-3 rounded bg-red-400 text-white text-lg font-semibold'>Back to homepage</button>
            </Link>

        </div>


    </div>;
};

export default NotFoundPage;
