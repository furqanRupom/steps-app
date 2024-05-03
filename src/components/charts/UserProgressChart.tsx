"use client"

import { AreaChart } from '@tremor/react';

const chartdata = [
      { date: 'Jan 22', 'goalsCompleted': 5, 'tasksCompleted': 20 },
    { date: 'Feb 22', 'goalsCompleted': 7, 'tasksCompleted': 25 },
    { date: 'Mar 22', 'goalsCompleted': 10, 'tasksCompleted': 8 },
    { date: 'Apr 22', 'goalsCompleted': 12, 'tasksCompleted': 11 },
    { date: 'May 22', 'goalsCompleted': 17, 'tasksCompleted': 12 },
    { date: 'Jun 22', 'goalsCompleted': 34, 'tasksCompleted': 15 },
    { date: 'Jul 22', 'goalsCompleted': 23, 'tasksCompleted': 12 },
    { date: 'Aug 22', 'goalsCompleted': 11, 'tasksCompleted': 20 },
    { date: 'Sep 22', 'goalsCompleted': 25, 'tasksCompleted': 30 },
    { date: 'Oct 22', 'goalsCompleted': 28, 'tasksCompleted': 25 },
    { date: 'Nov 22', 'goalsCompleted': 30, 'tasksCompleted': 21 },
    { date: 'Dec 22', 'goalsCompleted': 20, 'tasksCompleted': 33 },
];

const dataFormatter = (number: number | bigint) =>
    `$${Intl.NumberFormat('us').format(number).toString()}`;

export function UserProgressChart() {
    return (

        <div className='bg-gradient-to-tr from-gray-900 to-gray-950 p-1 lg:p-3 rounded-3xl'>
            <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mb-5 text-center lg:text-left">Goals and Tasks Overview</h3>

            <AreaChart 
                className="h-80  text-dark-tremor-content-strong mt-3"
                data={chartdata}
                showAnimation={true}
                animationDuration={5}
                showTooltip={true}
                showLegend={false}
                index="date"
                categories={['goalsCompleted', 'tasksCompleted']}
                colors={['red', 'gray']}
    
            />
        </div>
    );
}