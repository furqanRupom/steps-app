"use client"

import React from 'react';

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font  bg-gradient-to-br from-gray-900 to-gray-950 backdrop-blur-2xl">
            <div className="container px-10 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col  ">
                {/* Newsletter Section */}
                <div className="w-full md:w-1/2 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left mb-6 md:mb-0">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        {/* Your logo here */}
                        <span className="ml-3 text-xl">Steps</span>
                    </a>
                    <p className="mt-2 text-sm text-gray-500">Subscribe to our newsletter for updates.</p>
                    {/* Input field for newsletter subscription */}
                    <div className="flex mt-4 space-x-4 justify-center lg:justify-start">
                        <input type="email" className="border border-gray-300 focus:outline-none rounded-md px-4 py-2 w-1/2" placeholder="Your email address" />
                        {/* Send button */}
                        <button className="inline-flex text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded-md">Subscribe</button>
                    </div>
                </div>
                {/* Navigation Links */}
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center w-full md:w-1/2">
                    {/* About Us */}
                    <div className="w-full md:w-1/4 px-4">
                        <h2 className="title-font font-medium text-gray-400 tracking-widest mb-3">About Us</h2>
                        <nav className="list-none mb-10 text-sm space-y-3">
                            <li><a className="text-white  hover:text-gray-500" href="#about-us">Mission</a></li>
                            <li><a className="text-white hover:text-gray-500" href="#about-us">Team</a></li>
                            <li><a className="text-white hover:text-gray-500" href="#about-us">Values</a></li>
                            <li><a className="text-white hover:text-gray-500" href="#about-us">FAQ</a></li>
                        </nav>
                    </div>
                    {/* Contact Us */}
                    <div className="w-full md:w-1/4 px-4">
                        <h2 className="title-font font-medium text-gray-400 tracking-widest mb-3">Contact Us</h2>
                        <nav className="list-none mb-10 text-sm space-y-3">
                            <li><a className="text-white hover:text-gray-500" href="#contact-us">Support</a></li>
                            <li><a className="text-white hover:text-gray-500" href="#contact-us">Sales</a></li>
                            <li><a className="text-white hover:text-gray-500" href="#contact-us">Partnerships</a></li>
                            <li><a className="text-white hover:text-gray-500" href="#contact-us">Media</a></li>
                        </nav>
                    </div>
                    {/* Our Services */}
                    <div className="w-full md:w-1/4 px-4 ">
                        <h2 className="title-font font-medium text-gray-400 tracking-widest mb-3">Our Services</h2>
                        <nav className="list-none mb-10 text-sm space-y-3">
                            <li><a className="text-white hover:text-gray-500" href="#our-services">Goal Planning</a></li>
                            <li><a className="text-white hover:text-gray-500" href="#our-services">Progress Tracking</a></li>
                            <li><a className="text-white hover:text-gray-500" href="#our-services">Coaching & Support</a></li>
                            <li><a className="text-white hover:text-gray-500" href="#our-services">Custom Strategies</a></li>
                        </nav>
                    </div>


                    {/* Get Feedback */}
                    <div className="w-full md:w-1/4 px-4">
                        <h2 className="title-font font-medium text-gray-400 tracking-widest mb-3">Get Feedback</h2>
                        <nav className="list-none mb-10 text-sm space-y-3">
                            <li><a className="text-white hover:text-gray-500" href="#get-feedback">User Surveys</a></li>
                            <li><a className="text-white hover:text-gray-500" href="#get-feedback">Feedback Form</a></li>
                            <li><a className="text-white hover:text-gray-500" href="#get-feedback">Customer Reviews</a></li>
                            <li><a className="text-white hover:text-gray-500" href="#get-feedback">Testimonials</a></li>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Footer Bottom */}
            <div >
                <div className="container mx-auto py-4 px-8 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">&copy; {new Date().getFullYear()} Steps —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">All right reserved by Furqan Ahamd</a>
                    </p>
                    {/* Social Media Icons */}
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a href="https://www.facebook.com/" className="text-gray-600 ml-3" target="_blank" rel="noopener noreferrer">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10zm2.91 6.21h-1.1c-1.01 0-1.2.48-1.2 1.18v1.55h2.4l-.5 2.52h-1.9v6.14h-2.97v-6.14h-1.72V9.79h1.73v-1.6c0-1.74 1.05-2.69 2.6-2.69h1.6v2.42z"></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/" className="text-gray-600 ml-3" target="_blank" rel="noopener noreferrer">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M20 2H4C2.9 2 2 2.9 2 4v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8.5 18H5.2V9H8.5v9zm-1.7-10c-.9 0-1.6-.7-1.6-1.5C5.2 5.7 5.9 5 6.8 5c.9 0 1.6.7 1.6 1.5 0 .8-.7 1.5-1.6 1.5zm12.2 10h-3.3v-4.9c0-1.2-.4-2-1.4-2s-1.6.8-1.6 2v5h-3.3V9H12v1.2c.5-.8 1.4-1.5 2.7-1.5 2 0 3.5 1.3 3.5 4.2V18z"></path>
                            </svg>
                        </a>
                        <a href="https://twitter.com/" className="text-gray-600 ml-3" target="_blank" rel="noopener noreferrer">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M23 3.01c-1 .49-1.98.69-3 .78 1.08-.65 1.92-1.68 2.31-2.91-.96.57-2.02.98-3.15 1.2-.9-.96-2.18-1.56-3.6-1.56-2.73 0-4.94 2.21-4.94 4.94 0 .39.05.78.14 1.15C7.39 7.65 4.32 5.43 2 2.47c-.43.74-.68 1.61-.68 2.53 0 1.72.87 3.24 2.19 4.13-.81 0-1.57-.24-2.23-.61v.06c0 2.4 1.7 4.4 3.95 4.86-.41.11-.85.17-1.3.17-.32 0-.63-.03-.93-.09.63 1.95 2.45 3.38 4.6 3.42-1.68 1.32-3.8 2.11-6.1 2.11-.4 0-.79-.02-1.18-.07 2.18 1.4 4.76 2.21 7.55 2.21 9.06 0 14-7.51 14-14v-.64c.94-.68 1.76-1.53 2.4-2.5z"></path>
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/" className="text-gray-600 ml-3" target="_blank" rel="noopener noreferrer">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M3 3h18v18H3V3zm9 12l5.235-3-5.235-3v6z"></path>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
