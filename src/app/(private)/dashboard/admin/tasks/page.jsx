"use client";

import { FiTrash2 } from "react-icons/fi";


const jobs = [
    {
        title: "Totam aperiam ullamc",
        category: "Development",
        client: "rejo@mailinator.com",
        budget: "$88",
        status: "Open",
        proposals: 0,
        created: "Jun 26, 2026",
    },
    {
        title: "Hell John Client",
        category: "Writing",
        client: "john1@gmail.com",
        budget: "$200",
        status: "Completed",
        proposals: 1,
        created: "Jun 25, 2026",
    },
    {
        title: "Fugit nihil sit si",
        category: "Development",
        client: "ryvabutu@mailinator.com",
        budget: "$70",
        status: "Open",
        proposals: 2,
        created: "Jun 25, 2026",
    },
    {
        title: "Animation design",
        category: "Writing",
        client: "maliha.miti.0276@gmail.com",
        budget: "$677",
        status: "Completed",
        proposals: 1,
        created: "Jun 25, 2026",
    },
    {
        title: "Doraemon Card",
        category: "Design",
        client: "maliha.miti.0276@gmail.com",
        budget: "$51",
        status: "Open",
        proposals: 0,
        created: "Jun 25, 2026",
    },
    {
        title: "App Development",
        category: "Development",
        client: "client123@gmail.com",
        budget: "$250",
        status: "Open",
        proposals: 0,
        created: "Jun 25, 2026",
    },
];
export default function JobsTable() {

    return (

        <div className="min-h-screen bg-purple-50 p-4">
            <h1 className="text-3xl font-bold text-purple-700 mb-6">
                Jobs Management
            </h1>
            <div className="
bg-white
rounded-2xl
shadow-lg
border
border-purple-100
overflow-hidden
">
                <table className="w-full">
                    <thead>
                        <tr className="
bg-purple-600
text-white
">

                            <th className="px-3 py-2 text-left">
                                Title
                            </th>

                            <th className="px-3 py-2 text-left">
                                Category
                            </th>

                            <th className="px-3 py-2 text-left">
                                Client
                            </th>
                            <th className="px-3 py-2 text-left">
                                Budget
                            </th>

                            <th className="px-3 py-2 text-left">
                                Status
                            </th>

                            <th className="px-3 py-2 text-center">
                                Proposals
                            </th>
                            <th className="px-3 py-2 text-left">
                                Created
                            </th>
                            <th className="px-3 py-2 text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, index) => (

                                <tr
                                    key={index}
                                    className="
border-b
hover:bg-purple-50
transition
">
                                    <td className="
px-3 py-2
font-medium
text-gray-800
">
                                        {job.title}
                                    </td>
                                    <td className="px-3 py-2">
                                        <span className="
bg-purple-100
text-purple-700
px-3
py-1
rounded-full
text-sm
">
                                            {job.category}
                                        </span>
                                    </td>
                                    <td className="
px-3 py-2
text-gray-500
">

                                        {job.client}

                                    </td>

                                    <td className="
px-3 py-2
font-medium
">

                                        {job.budget}

                                    </td>
                                    <td className="px-3 py-2">
                                        {
                                            job.status === "Open" ?
                                                <span className="
px-3 py-1
rounded-full
text-sm
bg-blue-100
text-blue-600
">
                                                    Open
                                                </span>
                                                :
                                                <span className="
px-3 py-1
rounded-full
text-sm
bg-green-100
text-green-600
">
                                                    Completed
                                                </span>

                                        }
                                    </td>
                                    <td className="
px-3 py-2
text-center
">
                                        {job.proposals}
                                    </td>
                                    <td className="
px-3 py-2
text-gray-500
">
                                        {job.created}
                                    </td>

                                    <td className="
px-3 py-2
text-center
">
                                        <button
                                            className="
text-red-500
hover:text-red-700
text-xl
"
                                        >

                                            <FiTrash2 />
                                        </button>
                                    </td>
                                </tr>


                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}