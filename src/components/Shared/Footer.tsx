import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    return <footer className='   w-full h-full  bg-black backdrop-blur-2xl text-center'>
        <p className='text-white'>Copyright and &copy; <span className='text-gray-100'>{new Date().getFullYear()}</span> Developed By Furqan Ahmad</p>
    </footer>;
};

export default Footer;
