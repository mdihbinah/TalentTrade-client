'use client'

import TaskSearchFilter from "@/component/Tasks/TaskSearchFilter";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TaskGrid() {
  const [tasks, setTasks] = useState([])


  useEffect(() => {

    const fetchCars = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/tasks`)
      const data = await res.json();
      setTasks(data);
    }
    fetchCars()

  }, [])



  return (
    <section className="py-10">
      <TaskSearchFilter setTasks={setTasks}></TaskSearchFilter>
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
              href={`/task/${task._id}`}
              className="btn w-full mt-5 bg-purple-600 hover:bg-purple-700 text-white border-none"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}