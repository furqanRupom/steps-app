import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import React from 'react';

interface User {
    id: number;
    username: string;
    goals: Goal[];
    tasks: Task[];
}

interface Goal {
    id: number;
    name: string;
    progress: number;
    status: string;
}

interface Task {
    id: number;
    name: string;
    priority: string;
    dueDate: string;
}

const AdminDashboard: React.FC = async() => {
    // Dummy users with their goals and tasks

    const loggedUser = await getServerSession(options);
    console.log(loggedUser);

    const users: User[] = [
        {
            id: 1,
            username: 'John',
            goals: [
                { id: 1, name: 'Lose Weight', progress: 75, status: 'In Progress' },
                { id: 2, name: 'Learn a New Language', progress: 50, status: 'In Progress' },
                { id: 3, name: 'Read 20 Books', progress: 100, status: 'Completed' },
            ],
            tasks: [
                { id: 1, name: 'Workout', priority: 'High', dueDate: '2024-05-10' },
                { id: 2, name: 'Practice Spanish', priority: 'Medium', dueDate: '2024-05-15' },
            ],
        },
        {
            id: 2,
            username: 'Alice',
            goals: [
                { id: 4, name: 'Travel to Europe', progress: 25, status: 'Not Started' },
                { id: 5, name: 'Learn to Play Guitar', progress: 10, status: 'In Progress' },
            ],
            tasks: [
                { id: 3, name: 'Read "The Great Gatsby"', priority: 'Low', dueDate: '2024-05-20' },
                { id: 4, name: 'Book Flight Tickets', priority: 'High', dueDate: '2024-05-25' },
            ],
        },
    ];

    // Calculate overall progress
    const overallProgress = users.reduce((acc, user) => {
        const userProgress = user.goals.reduce((sum, goal) => sum + goal.progress, 0);
        return acc + userProgress;
    }, 0) / (users.length * 100 * 3) * 100; // Assuming each user has 3 goals

    return (
        <div className="min-h-screen bg-slate-900">

            <div className="p-8">
                {/* Overall Progress Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h2 className="text-white text-lg font-bold mb-2">Total Goals</h2>
                        <p className="text-white text-2xl font-bold">{users.reduce((acc, user) => acc + user.goals.length, 0)}</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h2 className="text-white text-lg font-bold mb-2">Total Tasks</h2>
                        <p className="text-white text-2xl font-bold">{users.reduce((acc, user) => acc + user.tasks.length, 0)}</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h2 className="text-white text-lg font-bold mb-2">Overall Progress</h2>
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-orange-500 mr-2"></div>
                            <div className="relative w-full h-2 bg-gray-700 rounded-full">
                                <div className="absolute top-0 left-0 h-full bg-orange-500 rounded-full" style={{ width: `${overallProgress}%` }}></div>
                            </div>
                        </div>
                        <p className="text-white">{overallProgress.toFixed(2)}%</p>
                    </div>
                </div>

                {/* Goals Overview */}
                <div className="bg-gray-800 p-6 rounded-lg mb-8">
                    <h2 className="text-white text-lg font-bold mb-4">Goals Overview</h2>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-left text-white">Username</th>
                                    <th className="px-4 py-2 text-left text-white">Goal Name</th>
                                    <th className="px-4 py-2 text-left text-white">Progress</th>
                                    <th className="px-4 py-2 text-left text-white">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    user.goals.map(goal => (
                                        <tr key={goal.id} className="border-b border-gray-700">
                                            <td className="px-4 py-2 text-white">{user.username}</td>
                                            <td className="px-4 py-2 text-white">{goal.name}</td>
                                            <td className="px-4 py-2 text-white">{goal.progress}%</td>
                                            <td className="px-4 py-2 text-white">{goal.status}</td>
                                        </tr>
                                    ))
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Tasks Overview */}
                <div className="bg-gray-800 p-6 rounded-lg mb-8">
                    <h2 className="text-white text-lg font-bold mb-4">Tasks Overview</h2>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-left text-white">Username</th>
                                    <th className="px-4 py-2 text-left text-white">Task Name</th>
                                    <th className="px-4 py-2 text-left text-white">Priority</th>
                                    <th className="px-4 py-2 text-left text-white">Due Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    user.tasks.map(task => (
                                        <tr key={task.id} className="border-b border-gray-700">
                                            <td className="px-4 py-2 text-white">{user.username}</td>
                                            <td className="px-4 py-2 text-white">{task.name}</td>
                                            <td className="px-4 py-2 text-white">{task.priority}</td>
                                            <td className="px-4 py-2 text-white">{task.dueDate}</td>
                                        </tr>
                                    ))
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AdminDashboard;
