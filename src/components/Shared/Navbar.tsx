import Link from 'next/link';
import * as React from 'react';

interface INavBarPageProps {
}

const Navbar: React.FunctionComponent<INavBarPageProps> = (props) => {
  return <section>

    <nav className='flex justify-between items-center px-8 py-3 fixed w-full top-0 z-50 bg-opacity-25 backdrop-blur-2xl bg-gray-900'>
      <h3 className='text-red-400  text-3xl font-bold'>Step<span className='text-white'>s</span></h3>

      <ul className='flex space-x-5 text-white items-center text-lg font-normal'>
        <li className='hover:text-red-400 duration-500'>
          <Link href="/">home</Link>
        </li>
        <li className='hover:text-red-400 duration-500'>
          <Link href="/about">about</Link>
        </li>
        <li className='hover:text-red-400 duration-500'>
          <Link href="/news">news</Link>
        </li>
        <li className='hover:text-red-400 duration-500'>
          <Link href="/contact">contact</Link>
        </li>

        <li className='border uppercase hover:text-red-400 hover:border-transparent duration-500 cursor-pointer border-red-400 py-1 px-7'>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  </section>;
};

export default Navbar;
