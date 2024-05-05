'use client';
import { Card, DonutChart, List, ListItem } from '@tremor/react';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const goalsAndTasksHistory = [
    {
        name: 'Completed Goals',
        count: 25,
        share: '50%',
        color: 'bg-green-400',
    },
    {
        name: 'Pending Goals',
        count: 15,
        share: '30%',
        color: 'bg-amber-400',
    },
    {
        name: 'Overdue Goals',
        count: 10,
        share: '20%',
        color: 'text-red-500',
    },
];



export default function UserProgressHistory() {
    return (
        <section className='bg-gradient-to-tr from-gray-900 to-gray-950 p-1 lg:p-3 rounded-3xl'>
            <div className="max-w-md bg-transparent  sm:mx-auto sm:max-w-lg p-3">
                <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    Goals and Tasks Overall History
                </h3>
                <DonutChart
                    className="mt-8"
                    data={goalsAndTasksHistory}
                    category="count"
                    index="name"
                    showTooltip={false}
                    colors={['green', 'amber', 'red']}
                />
                <p className="mt-8 flex items-center justify-between text-tremor-label text-tremor-content dark:text-dark-tremor-content">
                    <span>Category</span>
                    <span>count / Share</span>
                </p>
                <List className="mt-2">
                    {goalsAndTasksHistory.map((item) => (
                        <ListItem key={item.name} className="space-x-6">
                            <div className="flex items-center space-x-2.5 truncate">
                                <span
                                    className={classNames(
                                        item.color,
                                        'h-2.5 w-2.5 shrink-0 rounded-sm',
                                    )}
                                    aria-hidden={true}
                                />
                                <span className="truncate dark:text-dark-tremor-content-emphasis">
                                    {item.name}
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="font-medium tabular-nums text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                    {item.count}
                                </span>
                                <span className="rounded-tremor-small bg-tremor-background-subtle px-1.5 py-0.5 text-tremor-label font-medium tabular-nums text-tremor-content-emphasis dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis">
                                    {item.share}
                                </span>
                            </div>
                        </ListItem>
                    ))}
                </List>
            </div>
        </section>
    );
}
