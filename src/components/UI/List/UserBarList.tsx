"use client"

import { BarList } from '@tremor/react';

const mostValuableGoalsData = [
    { name: 'Increase User Engagement', value: 95 },
    { name: 'Improve Task Completion Rate', value: 88 },
    { name: 'Enhance User Experience', value: 82 },
  
];

export const UserbarList = () => (
    <div>
        <h2 className='text-tremor-content py-5 shadow-tremor-card'>Most Valuable Goals</h2>
        <BarList color="slate" sortOrder='descending' data={mostValuableGoalsData}  />
    </div>
);
