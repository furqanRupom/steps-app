"use client"

import { BarChart } from '@tremor/react';

const chartdata = [
    {
        category: 'Personal Development',
        'Number of goals completed': 38,
    },
    {
        category: 'Work',
        'Number of goals completed': 55,
    },
    {
        category: 'Health & Fitness',
        'Number of goals completed': 27,
    },
    {
        category: 'Education',
        'Number of goals completed': 45,
    },
    {
        category: 'Hobbies',
        'Number of goals completed': 20,
    },
    {
        category: 'Travel',
        'Number of goals completed': 12,
    },
    {
        category: 'Family & Relationships',
        'Number of goals completed': 30,
    },
];


const dataFormatter = (number: number) =>
    Intl.NumberFormat('us').format(number).toString();

import * as React from 'react';

interface IUserBarChartProps {
}

const UserBarChart: React.FunctionComponent<IUserBarChartProps> = (props) => {
    return <div className='bg-gradient-to-tr from-gray-900 to-gray-950 p-1 lg:p-3 rounded-3xl'>
        <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mb-5 text-center lg:text-left ">Goals Completed by Category Overview</h3>
        <BarChart
            className=' py-10 lg:py-0 '
            data={chartdata}
            index="name"
            categories={['Number of goals completed']}
            colors={['red']}
            valueFormatter={dataFormatter}
            yAxisWidth={48}
            showLegend={false}
            showAnimation={true}
            onValueChange={(v) => console.log(v)}
        />
    
    </div>;
};

export default UserBarChart;
