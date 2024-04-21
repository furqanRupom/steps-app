import * as React from 'react';

interface IContactPageProps {
}

export const metadata = {
  title: "Steps | contact",
  description: "Contact with us. We are always ready for take your hospitability"
}
const ContactPage: React.FunctionComponent<IContactPageProps> = (props) => {
  return <h3 className='min-h-screen  flex items-center justify-center w-full h-full bg-gradient-to-t from-black to-gray-900 backdrop-blur-2xl text-center'>this is our contact page</h3>;
};

export default ContactPage;
