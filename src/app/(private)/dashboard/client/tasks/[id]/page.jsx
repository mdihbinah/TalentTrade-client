"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import TaskDetailsCard from "@/components/dashboard/client/TaskDetailsCard";
import ProposalCard from "@/components/dashboard/client/ProposalCard";
import ProposalEmpty from "@/components/dashboard/client/ProposalEmpty";

export default function TaskDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [task, setTask] = useState(null);
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const taskRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`
        );
        const taskData = await taskRes.json();

        const proposalRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/proposals/task/${id}`
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
      <div className="p-8">
        Loading...
      </div>
    );
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

      <TaskDetailsCard task={task} />

      <div className="mt-8 bg-white rounded-3xl border p-8">

        <h2 className="text-2xl font-bold mb-6">
          Proposals ({proposals.length})
        </h2>

        {proposals.length === 0 ? (
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