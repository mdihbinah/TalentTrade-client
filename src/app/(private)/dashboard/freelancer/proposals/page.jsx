'use client';

import { useEffect, useState } from 'react';
import {
  FaPaperPlane,
  FaDollarSign,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';

const MyProposalsPage = () => {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:5000/api/proposals/freelancer/freelancer@gmail.com`
    )
      .then((res) => res.json())
      .then((data) => setProposals(data));
  }, []);

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold text-purple-900">
          My Proposals
        </h1>

        <p className="text-gray-500 mt-2">
          {proposals.length} proposal
          {proposals.length !== 1 && 's'} submitted
        </p>
      </div>

      {/* Proposal List */}

      <div className="space-y-5">

        {proposals.map((proposal) => (
          <div
            key={proposal._id}
            className="bg-white border border-purple-100 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row justify-between gap-4">

              <div className="flex-1">

                <h2 className="text-2xl font-bold text-gray-800">
                  {proposal.task_title}
                </h2>

                <p className="text-gray-500 mt-2">
                  {proposal.cover_note}
                </p>

                <div className="flex flex-wrap gap-5 mt-5 text-sm">

                  <div className="flex items-center gap-2 font-semibold text-purple-700">
                    <FaDollarSign />
                    ${proposal.proposed_budget}
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <FaClock />
                    {proposal.estimated_days} days
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <FaCalendarAlt />
                    {new Date(
                      proposal.submitted_at
                    ).toLocaleDateString()}
                  </div>

                  <div className="text-gray-600">
                    Task Budget:
                    <span className="font-semibold ml-1">
                      ${proposal.task_budget}
                    </span>
                  </div>

                </div>
              </div>

              {/* Status Badge */}

              <div>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    proposal.status === 'pending'
                      ? 'bg-purple-100 text-purple-700'
                      : proposal.status === 'accepted'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {proposal.status}
                </span>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Empty State */}

      {proposals.length === 0 && (
        <div className="bg-white border border-purple-100 rounded-3xl py-24">

          <div className="text-center">

            <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mx-auto">
              <FaPaperPlane className="text-4xl text-purple-600" />
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mt-6">
              No proposals yet
            </h2>

            <p className="text-gray-500 mt-3">
              Browse available tasks and submit your first proposal.
            </p>

            <a
              href="/browse-tasks"
              className="btn mt-6 bg-purple-600 hover:bg-purple-700 text-white border-none"
            >
              Browse Tasks
            </a>

          </div>

        </div>
      )}
    </div>
  );
};

export default MyProposalsPage;