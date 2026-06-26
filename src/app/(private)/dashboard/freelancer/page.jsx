'use client';

import Link from 'next/link';
import {
  FaFileAlt,
  FaClock,
  FaCheckCircle,
  FaDollarSign,
  FaSearch,
} from 'react-icons/fa';

const stats = [
  {
    title: 'Total Proposals',
    value: 12,
    subtitle: 'Applications submitted',
    icon: <FaFileAlt />,
  },
  {
    title: 'Pending',
    value: 5,
    subtitle: 'Awaiting response',
    icon: <FaClock />,
  },
  {
    title: 'Accepted',
    value: 4,
    subtitle: 'Proposals accepted',
    icon: <FaCheckCircle />,
  },
  {
    title: 'Total Earned',
    value: '$1,250',
    subtitle: 'Completed projects',
    icon: <FaDollarSign />,
  },
];

export default function FreelancerDashboard() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Freelancer Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Track your proposals and earnings
          </p>
        </div>

        <Link
          href="/browse-tasks"
          className="btn bg-gradient-to-r from-purple-600 to-violet-600 border-0 text-white hover:scale-105 transition"
        >
          <FaSearch />
          Browse Tasks
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl border border-purple-100 p-6 shadow-sm hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 font-medium">
                  {item.title}
                </p>

                <h2 className="text-4xl font-bold mt-2 text-gray-900">
                  {item.value}
                </h2>

                <p className="text-sm text-gray-400 mt-2">
                  {item.subtitle}
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Proposals */}
      <div className="bg-white rounded-3xl border border-purple-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-purple-100">
          <h2 className="text-2xl font-bold">
            Recent Proposals
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            <thead className="bg-purple-50">
              <tr>
                <th>Task</th>
                <th>Bid Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Landing Page Design</td>
                <td>$150</td>
                <td>25 Jun 2026</td>
                <td>
                  <span className="badge badge-warning">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td>React Dashboard</td>
                <td>$300</td>
                <td>23 Jun 2026</td>
                <td>
                  <span className="badge bg-green-100 text-green-700 border-0">
                    Accepted
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl border border-purple-100 py-20 text-center">

        <div className="w-24 h-24 mx-auto rounded-full bg-purple-100 flex items-center justify-center text-4xl text-purple-600">
          <FaFileAlt />
        </div>

        <h3 className="text-3xl font-bold mt-6">
          No proposals yet
        </h3>

        <p className="text-gray-500 mt-3 max-w-md mx-auto">
          Browse available tasks and submit your first proposal.
        </p>

        <Link
          href="/browse-tasks"
          className="btn mt-6 bg-gradient-to-r from-purple-600 to-violet-600 border-0 text-white"
        >
          Browse Tasks
        </Link>
      </div>
    </div>
  );
}