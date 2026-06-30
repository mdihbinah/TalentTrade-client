"use client";

import Link from "next/link";
import {
  FaCalendarAlt,
  FaDollarSign,
  FaRegEdit,
} from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import EditTask from "./EditTask";
import DeleteCard from "./DeleteCard";

export default function TaskDetailsCard({ task, setIsEdit, isEdit }) {
  
  return (
    <div className="bg-white rounded-3xl border shadow-sm p-8">

      <div className="flex flex-wrap items-center gap-3">

        <span className="px-4 py-1 rounded-full bg-purple-100 text-purple-700 font-semibold">
          {task.status}
        </span>

        <span className="px-4 py-1 rounded-full bg-gray-100">
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

      <p className="mt-6 text-gray-600 leading-8">
        {task.description}
      </p>

      <div className="border-t mt-8 pt-6 flex gap-4">

        {/* <Link
          href={`/dashboard/client/edit-task/${task._id}`}
          className="flex items-center gap-2 px-5 py-3 rounded-xl border hover:bg-purple-50 hover:border-purple-300"
        >
          
          
        </Link> */}
        

        <button onClick={() =>{setIsEdit(!isEdit)}}
          className="flex items-center gap-2 px-5 py-3 rounded-xl border border-purple-300 text-purple-500 hover:bg-purple-100"
        >
          <FaRegEdit />
          Edit
        </button>
          <DeleteCard taskId={task._id}></DeleteCard>

      </div>
    </div>
  );
}