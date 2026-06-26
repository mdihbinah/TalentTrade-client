'use client';

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
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [status, setStatus] = useState('all');

  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchSearch = task.title
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === 'all' || task.category === category;

      const matchStatus =
        status === 'all' || task.status === status;

      return matchSearch && matchCategory && matchStatus;
    });
  }, [tasks, search, category, status]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg text-purple-600"></span>
      </div>
    );
  }

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

      {/* Filters */}

      <div className="grid md:grid-cols-3 gap-4">

        <div className="relative">
          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full pl-12 focus:border-purple-500"
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select select-bordered w-full focus:border-purple-500"
        >
          <option value="all">All Categories</option>
          <option value="Design">Design</option>
          <option value="Writing">Writing</option>
          <option value="Development">Development</option>
          <option value="Marketing">Marketing</option>
          <option value="Other">Other</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="select select-bordered w-full focus:border-purple-500"
        >
          <option value="all">All Status</option>
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Task Grid */}

      <div className="grid lg:grid-cols-2 gap-6">

        {filteredTasks.map((task) => (
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

      {filteredTasks.length === 0 && (
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