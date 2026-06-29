"use client";

import {
  FaDollarSign,
  FaClock,
  FaEnvelope,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

export default function ProposalCard({ proposal }) {
  return (
    <div className="border rounded-2xl p-6 hover:border-purple-300 transition">

      <div className="flex justify-between flex-wrap gap-5">

        <div>

          <h3 className="font-bold text-lg">
            {proposal.freelancer_name}
          </h3>

          <div className="flex items-center gap-2 text-gray-500 mt-1">
            <FaEnvelope />
            {proposal.freelancer_email}
          </div>

        </div>

        <span className="px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 font-semibold capitalize">
          {proposal.status}
        </span>

      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">

        <div className="flex items-center gap-3">
          <FaDollarSign className="text-purple-600" />
          <span>${proposal.budget}</span>
        </div>

        <div className="flex items-center gap-3">
          <FaClock className="text-purple-600" />
          <span>{proposal.estimated_days} Days</span>
        </div>

      </div>

      <p className="mt-6 text-gray-600">
        {proposal.cover_note}
      </p>

      {proposal.status === "pending" && (
        <div className="flex gap-4 mt-8">

          <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700">
            <FaCheck />
            Accept
          </button>

          <button className="flex items-center gap-2 px-5 py-3 rounded-xl border border-red-400 text-red-600 hover:bg-red-50">
            <FaTimes />
            Reject
          </button>

        </div>
      )}
    </div>
  );
}