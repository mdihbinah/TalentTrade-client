'use client';

import { authClient } from '@/app/lib/auth-client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  FaSearch,
  FaCalendarAlt,
  FaDollarSign,
  FaPlus,
  FaEye,
  FaEdit,
  FaTrash,
} from 'react-icons/fa';

const MyTasksPage = () => {
    const { data: session } = authClient.useSession();
// console.log(session);
const userId = session?.user.id
console.log(userId);

  const [tasks, setTasks] = useState([]);

  

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/my-tasks?id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        console.log(tasks)
      })
  }, []);



  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4">

        <div>
          <h1 className="text-4xl font-bold text-purple-900">
            My Tasks
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all your posted tasks
          </p>
        </div>

        <Link
          href="/dashboard/client/post"
          className="btn bg-purple-600 hover:bg-purple-700 text-white border-none"
        >
          <FaPlus />
          Post New Task
        </Link>
      </div>

      {/* Task Grid */}

      <div className="grid lg:grid-cols-2 gap-6">

        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-white border border-purple-100 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all"
          >
            {/* Top */}

            <div className="flex justify-between items-start">

              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {task.title}
                </h2>

                <p className="text-gray-500 mt-2 line-clamp-2">
                  {task.description}
                </p>
              </div>

              <span
                className={`px-4 py-1 rounded-full text-sm font-medium
                ${
                  task.status === 'open'
                    ? 'bg-purple-100 text-purple-700'
                    : task.status === 'in-progress'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-green-100 text-green-700'
                }`}
              >
                {task.status}
              </span>
            </div>

            {/* Info */}

            <div className="flex flex-wrap gap-4 mt-6">

              <span className="badge badge-lg bg-purple-100 text-purple-700 border-none">
                {task.category}
              </span>

              <div className="flex items-center gap-1 text-gray-600">
                <FaDollarSign />
                {task.budget}
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <FaCalendarAlt />
                {new Date(task.deadline).toLocaleDateString()}
              </div>
            </div>

            {/* Actions */}

            <div className="flex justify-end gap-3 mt-8">

              <Link
                href={`/dashboard/client/tasks/${task._id}`}
                className="btn btn-sm bg-purple-100 text-purple-700 border-none"
              >
                <FaEye />
              </Link>

              {task.status === 'open' && (
                <>
                  <Link
                    href={`/dashboard/client/edit-task/${task._id}`}
                    className="btn btn-sm bg-purple-600 text-white border-none"
                  >
                    <FaEdit />
                  </Link>

                  <button className="btn btn-sm bg-red-500 text-white border-none">
                    <FaTrash />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {tasks.length === 0 && (
        <div className="text-center py-20 bg-slate-100 rounded-3xl border-2 border-purple-100">
          <h3 className="text-xl font-semibold text-gray-700">
            No Tasks Found
          </h3>

          <p className="text-gray-500 mt-2">
            Try changing your filters.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyTasksPage;