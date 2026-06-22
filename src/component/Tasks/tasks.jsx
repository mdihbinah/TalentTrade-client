"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function TaskGrid() {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`/api/tasks?page=${page}&limit=9`)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.tasks);
        setTotalPages(data.totalPages);
      });
  }, [page]);

  return (
    <section className="py-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-white rounded-2xl border border-purple-100 shadow-sm hover:shadow-lg transition-all p-6"
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-100 text-purple-700 rounded-full mb-3">
              {task.category}
            </span>

            <h2 className="text-xl font-bold mb-2 line-clamp-2">
              {task.title}
            </h2>

            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {task.description}
            </p>

            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">Budget:</span> $
                {task.budget}
              </p>

              <p>
                <span className="font-semibold">Deadline:</span>{" "}
                {new Date(task.deadline).toLocaleDateString()}
              </p>

              <p>
                <span className="font-semibold">Client:</span>{" "}
                {task.client_name || task.client_email}
              </p>
            </div>

            <Link
              href={`/tasks/${task._id}`}
              className="btn w-full mt-5 bg-purple-600 hover:bg-purple-700 text-white border-none"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-10">
        <button
          className="btn btn-outline"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>

        <span className="btn bg-purple-600 text-white border-none">
          {page}
        </span>

        <button
          className="btn btn-outline"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </section>
  );
}