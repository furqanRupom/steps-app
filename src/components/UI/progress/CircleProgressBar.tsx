"use client"
import { ProgressCircle } from '@tremor/react';
import * as React from 'react';

interface ICircleProgressBarProps {
    value: number,
    color: any;
    radius: number;
    strokeWidth: number;
}

const CircleProgressBar: React.FunctionComponent<ICircleProgressBarProps> = ({ value, color, radius, strokeWidth }) => {
    return <div className='relative'>
        <ProgressCircle
            color={color}
            value={value}
            size='xl'
            radius={radius}
            strokeWidth={strokeWidth}
            tooltip={`${value}% is completed`}
        > <h3 color={color} className={`text-${color}-400 text-3xl font-bold`}>{value}</h3></ProgressCircle>

    </div>;
};

export default CircleProgressBar;
