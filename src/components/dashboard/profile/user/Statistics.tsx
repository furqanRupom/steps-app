
"use client"
import { IChartData, IChartDataProps } from '@/interfaces';
import { Card, SparkAreaChart } from '@tremor/react';
import React from 'react';

const chartdata = [
    {
        month: 'Jan 21',
        Performance: 4000,
    },
    {
        month: 'Feb 21',
        Performance: 3000,
    },
    {
        month: 'Mar 21',
        Performance: 2000,
    },
    {
        month: 'Apr 21',
        Performance: 2780,
    },
    {
        month: 'May 21',
        Performance: 1890,
    },
    {
        month: 'Jun 21',
        Performance: 2390,
    },
    {
        month: 'Jul 21',
        Performance: 3490,
    },
];

interface IStatisticsProps {
    title:string;
    description:string;
    chartData:IChartData[];

}
const Statistics:React.FunctionComponent<IStatisticsProps> = ({title,description,chartData}) =>  {
    return (
        <Card className=" grid grid-cols-1 lg:grid-cols-2 justify-items-center">
            <div className="">
                <p className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">{title}</p>
                <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">{description}</span>
            </div>
            <SparkAreaChart
    
                data={chartData}
                categories={['Performance']}
                index={'month'}
                colors={['red']}
                className="h-8 w-20 sm:h-10 sm:w-30"
            />
        
        </Card>
    );
}

export default Statistics;