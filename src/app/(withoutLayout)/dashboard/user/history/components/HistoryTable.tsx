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

interface IMockData {
    name:string;
    Role:string;
    departement:string;
    status:string;
}
const mockData:IMockData[] = [
  {
    name: 'Viola Amherd',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of Defence, Civil Protection and Sport (DDPS)',
    status: 'active',
  },
  {
    name: 'Albert Rösti',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of the Environment, Transport, Energy and Communications (DETEC)',
    status: 'active',
  },
  {
    name: 'Beat Jans',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Justice and Police (FDJP)',
    status: 'active',
  },
  {
    name: 'Ignazio Cassis',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Foreign Affairs (FDFA)',
    status: 'active',
  },
  {
    name: 'Karin Keller-Sutter',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Finance (FDF)',
    status: 'active',
  },
  {
    name: 'Guy Parmelin',
    Role: 'Federal Councillor',
    departement:
      'The Federal Department of Economic Affairs, Education and Research (EAER)',
    status: 'active',
  },
  {
    name: 'Elisabeth Baume-Schneider',
    Role: 'Federal Councillor',
    departement: 'The Federal Department of Home Affairs (FDHA)',
    status: 'active',
  },
];

const HistoryTable: React.FunctionComponent<IHistoryTableProps> = (props) => {
  return <>
   <section className='max-w-6xl mx-auto pt-5 pb-6'>
    <div className='flex justify-between items-center '>
         <div >
             <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold pt-5">Tasks and Goals history</h3>
          <p className='text-gray-600 leading-relaxed'>View tasks and goals history to know your challenge progress more better</p>
         </div>
         <div className='flex items-center space-x-2'>
          <Button color='gray' className='bg-gray-900 text-gray-50' icon={RiDownload2Fill}>Download as CSV</Button>
               <Button  color='red' className='text-gray-50 text-lg bg-red-500 rounded-full' icon={RiAddBoxLine}></Button>
     
        
         </div>


    </div>
      <Table className='bg-gradient-to-tr from-gray-900 to-gray-950 p-1 lg:p-3 rounded-3xl   mt-12'>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Position</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockData?.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                {item.Role}
              </TableCell>
             
              <TableCell>
                <Badge color="emerald" icon={RiFlag2Line}>
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
