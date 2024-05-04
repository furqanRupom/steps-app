"use client"

import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react';

export const UserProgressTable = () => (
    <div className='bg-gradient-to-tr from-gray-900 to-gray-950 p-1 lg:p-3 rounded-3xl'>
        <h3 className='text-tremor-content text-tremor-subtile py-5'>My Progress and Task Status</h3>
        <Table className='max-w-[20rem] lg:max-w-full'>
            <TableHead>
                <TableRow>
                    <TableHeaderCell>Goal Name</TableHeaderCell>
                    <TableHeaderCell>Goal Category</TableHeaderCell>
                    <TableHeaderCell>Goal Status</TableHeaderCell>
                    <TableHeaderCell>Task Name</TableHeaderCell>
                    <TableHeaderCell>Task Status</TableHeaderCell>
                </TableRow>
            </TableHead>

            <TableBody>
                <TableRow>
                    <TableCell>Learn a new language</TableCell>
                    <TableCell>Personal Development</TableCell>
                    <TableCell><Button color='gray' variant='secondary'>Active</Button></TableCell>
                    <TableCell>Complete Lesson 3</TableCell>
                    <TableCell><Button color='green' variant='light'>Completed</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Launch a new product</TableCell>
                    <TableCell>Work</TableCell>
                    <TableCell><Button color='gray' variant='secondary'>Active</Button></TableCell>
                    <TableCell>Design Marketing Campaign</TableCell>
                    <TableCell><Button color='orange' variant='light'>Pending</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Get fit and healthy</TableCell>
                    <TableCell>Health & Fitness</TableCell>
                    <TableCell><Button color='red' variant='secondary'>Inactive</Button></TableCell>
                    <TableCell>Go for a jog</TableCell>
                    <TableCell><Button color='rose' variant='light'>Failed</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Get fit and healthy</TableCell>
                    <TableCell>Health & Fitness</TableCell>
                    <TableCell><Button color='red' variant='secondary'>Inactive</Button></TableCell>
                    <TableCell>Go for a jog</TableCell>
                    <TableCell><Button color='rose' variant='light'>Failed</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Get fit and healthy</TableCell>
                    <TableCell>Health & Fitness</TableCell>
                    <TableCell><Button color='red' variant='secondary'>Inactive</Button></TableCell>
                    <TableCell>Go for a jog</TableCell>
                    <TableCell><Button color='rose' variant='light'>Failed</Button></TableCell>
                </TableRow>
                {/* Add more rows as needed */}
            </TableBody>
        </Table>
    </div>
);
