"use client";
import * as React from 'react';
import { RiAddBoxFill, RiAddBoxLine, RiDownload2Fill, RiDownload2Line, RiFlag2Line, RiPulseFill } from '@remixicon/react';

import {
  Badge,
  Button,
  Card,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  TextInput,
} from '@tremor/react'

interface IHistoryTableProps {
}

interface ITaskData {
    task: string;
    goal: string;
    progress: string;
    status: string;
}

const taskData: ITaskData[] = [
  {
    task: 'Complete Project Report',
    goal: 'Submit final report to client',
    progress: '80%',
    status: 'in-progress',
  },
  {
    task: 'Design Website',
    goal: 'Create initial website design',
    progress: '60%',
    status: 'in-progress',
  },
  {
    task: 'Develop Mobile App',
    goal: 'Launch app on App Store',
    progress: '100%',
    status: 'completed',
  },
  {
    task: 'Update User Manual',
    goal: 'Revise and update user manual',
    progress: '50%',
    status: 'in-progress',
  },
  {
    task: 'Organize Team Meeting',
    goal: 'Hold quarterly team meeting',
    progress: '100%',
    status: 'completed',
  },
];

const HistoryTable: React.FunctionComponent<IHistoryTableProps> = (props) => {
  return <>
    <section className='max-w-6xl mx-auto pt-5 pb-6'>
      <div className='flex justify-between items-center '>
        <div >
          <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold pt-5">Tasks and Goals History</h3>
          <p className='text-gray-600 leading-relaxed'>View tasks and goals history to know your challenge progress better</p>
        </div>
        <div className='flex items-center space-x-2'>
          <Button color='gray' className='bg-gray-900 text-gray-50' icon={RiDownload2Fill}>Download as CSV</Button>
          <Button color='red' className='text-gray-50 text-lg bg-red-500 rounded-full' icon={RiAddBoxLine}></Button>
        </div>
      </div>
      <Table className='bg-gradient-to-tr from-gray-900 to-gray-950 p-1 lg:p-3 rounded-xl mt-12'>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Task</TableHeaderCell>
            <TableHeaderCell>Goal</TableHeaderCell>
            <TableHeaderCell>Progress</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {taskData?.map((item) => (
            <TableRow key={item.task}>
              <TableCell>{item.task}</TableCell>
              <TableCell>{item.goal}</TableCell>
              <TableCell>{item.progress}</TableCell>
              <TableCell>
                <Badge color={item.status === 'completed' ? "emerald" : "yellow"} icon={RiFlag2Line}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  </>;
};

export default HistoryTable;
