"use client";
import { RiArrowLeftCircleFill, RiArrowRightCircleFill, RiArrowRightFill } from '@remixicon/react';
import { Card, Icon } from '@tremor/react';
import * as React from 'react';

interface IProgressOverviewProps {
}

const ProgressOverview: React.FunctionComponent<IProgressOverviewProps> = (props) => {
    const progressList = [
        {
            title:"Active Goals",
            number:3
        },
        {
            title: "Progress",
            number: 30
        },
        {
            title: "Completed Task",
            number: 6
        },
        {
            title: "Due Task",
            number: 2
        },
    ]
  return <section className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>

    {
        progressList.map(({title,number}) => (<Card className="p-0 flex items-center" key={title}>
            
           <div className='p-4'>
                <h3 className=' w-full'>{title}</h3>
                <p className=' text-2xl text-gray-400 font-bold'>{number}</p>
           </div>
        

          <div className='ml-auto  w-fit'>
                <Icon color='red' size='lg' icon={RiArrowRightCircleFill} />
          </div>
        </Card>))
    }


  </section>;
};

export default ProgressOverview;
