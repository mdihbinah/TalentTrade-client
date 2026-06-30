"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import TaskDetailsCard from "@/component/dashboard/client/TaskDetailsCard";
import ProposalCard from "@/component/dashboard/client/ProposalCard";
import ProposalEmpty from "@/component/dashboard/client/ProposalEmpty";
import EditTask from "@/component/dashboard/client/EditTask";
// import Loading from "@/app/loading";

export default function TaskDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  console.log(id);

  const [task, setTask] = useState(null);
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const taskRes = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/task/${id}`
        );
        const taskData = await taskRes.json();

        const proposalRes = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/proposals/${id}`
        );
        const proposalData = await proposalRes.json();

        setTask(taskData);
        setProposals(proposalData);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [id]);

  if (loading) {
    return (
      <p>Loading.....</p>
    );
  }

  if (!task) {
    return <p>task not found</p>
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      <button
        onClick={() => router.back()}
        className="flex items-center gap-3 mb-8 text-gray-700 hover:text-purple-600 font-medium"
      >
        <FaArrowLeft />
        Back
      </button>

      <h1 className="text-4xl font-bold mb-8">
        {task.title}
      </h1>

      <TaskDetailsCard task={task} setIsEdit={setIsEdit} isEdit={isEdit} />

      <div className="mt-8 bg-white rounded-3xl border p-8">

        <h2 className="text-2xl font-bold mb-6">
          Proposals ({proposals.length})
        </h2>

        {isEdit ? (
          <EditTask task={task} />
        ) : proposals.length === 0 ? (
          <ProposalEmpty />
        ) : (
          <div className="space-y-5">
            {proposals.map((proposal) => (
              <ProposalCard
                key={proposal._id}
                proposal={proposal}
              />
            ))}
          </div>
        )}


      </div>
    </div>
  );
}