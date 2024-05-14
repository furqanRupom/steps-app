import CircleProgressBar from '@/components/UI/progress/CircleProgressBar';
import { Card } from '@tremor/react';
import * as React from 'react';

interface ICompleteDueTasksProps {
}

const CompleteDueTasks: React.FunctionComponent<ICompleteDueTasksProps> = (props) => {
    const dueTasks = [
        { name: "Complete Project Nice", parentage: 20,color:"red",value:20 },
        { name: "Prepare Presentation", parentage: 40, color: "green", value: 40 },
        { name: "Attend Meeting", parentage: 31, color: "yellow", value: 31 },
        { name: "Finish Report", parentage: 42, color: "lime", value: 42 },
        { name: "Submit Proposal", parentage: 53, color: "orange", value: 53 }
    ];


  return <>
  <section>

    <h3 className='py-5 text-xl  sm:text-2xl '>Complete due tasks</h3>

    <div>
        <div className='space-y-5'>
            {
                dueTasks.map(({name,value,color},index) => (<Card className='p-0 flex justify-between px-5 py-2 items-center ' key={color}>
                    <div>
                        <h3 className=' sm:text-xl text-gray-400'>{index + 1}. {name}</h3>
                    </div>
                    <div>

                        <CircleProgressBar  radius={30} strokeWidth={3} value={value} color={color} />

                    </div>
                </Card>))
            }
        </div>
    </div>

  </section>
  </>;
};

export default CompleteDueTasks;
