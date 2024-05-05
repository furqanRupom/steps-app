import Contact from '@/components/contact/ContactPage';
import * as React from 'react';

interface IContactPageProps {
}

export const metadata = {
  title: "Steps | contact",
  description: "Contact with us. We are always ready for take your hospitability"
}
const ContactPage: React.FunctionComponent<IContactPageProps> = (props) => {
  return <section className='min-h-screen w-full h-full '>
    <Contact />
  </section>;
};

export default ContactPage;
