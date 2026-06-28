'use client';

import OverviewCard from '@/component/dashboard/admin/OverviewCard';
import TasksBarChart from '@/component/dashboard/admin/TasksBarChart';
import UsersPieChart from '@/component/dashboard/admin/UsersPieChart';
import { useEffect, useState } from 'react';

import {
    FaUsers,
    FaTasks,
    FaDollarSign,
    FaChartLine
} from 'react-icons/fa';



export default function AdminOverview() {

    const [stats, setStats] = useState({
        users: [],
        tasks: [],
        payments: []
    });

    useEffect(() => {

        Promise.all([
            fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users`).then(r => r.json()),
            fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/tasks`).then(r => r.json()),
            // fetch('http://localhost:5000/api/payments').then(r => r.json())
        ]).then(([users, tasks, payments]) => {

                setStats({
                    users,
                    tasks,
                    payments
                })

            })

    }, [])

    // const totalRevenue = stats.payments.reduce(
    //     (sum, item) => sum + Number(item.amount),
    //     0
    // );

    const activeTasks = stats.tasks.filter(
        task => task.status === "In Progress"
    );

    const admins = stats.users.filter(u => u.role === "admin").length;
    const clients = stats.users.filter(u => u.role === "Client").length;
    const freelancers = stats.users.filter(u => u.role === "Freelancer").length;

    const open = stats.tasks.filter(t => t.status === "Open").length;
    const progress = stats.tasks.filter(t => t.status === "In Progress").length;
    const completed = stats.tasks.filter(t => t.status === "Completed").length;

    return (

        <div className="space-y-8">

            <div>

                <h1 className="text-4xl font-bold text-purple-900">
                    Admin Dashboard
                </h1>

                <p className="text-gray-500 mt-1">
                    Platform overview & management
                </p>

            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                <OverviewCard
                    title="Total Users"
                    value={stats.users.length}
                    icon={<FaUsers />}
                    sub={`${admins} Admin • ${clients} Clients • ${freelancers} Freelancers`}
                />

                <OverviewCard
                    title="Total Tasks"
                    value={stats.tasks.length}
                    icon={<FaTasks />}
                    sub={`${open} Open Tasks`}
                />

                {/* <OverviewCard
                    title="Total Revenue"
                    value={`$${totalRevenue}`}
                    icon={<FaDollarSign />}
                    sub={`${stats.payments.length} Payments`}
                /> */}

                <OverviewCard
                    title="Active Tasks"
                    value={activeTasks.length}
                    icon={<FaChartLine />}
                    sub="Currently Working"
                />

            </div>

            <div className="grid lg:grid-cols-2 gap-8">

                <UsersPieChart

                    admins={admins}
                    clients={clients}
                    freelancers={freelancers}

                />

                <TasksBarChart

                    open={open}
                    progress={progress}
                    completed={completed}

                />

            </div>

        </div>

    );

}