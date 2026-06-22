import {
  ClipboardList,
  Clock3,
  BriefcaseBusiness,
  Wallet,
  PlusCircle,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Total Tasks",
    value: 24,
    subtitle: "All tasks created",
    icon: ClipboardList,
  },
  {
    title: "Open Tasks",
    value: 8,
    subtitle: "Awaiting proposals",
    icon: Clock3,
  },
  {
    title: "In Progress",
    value: 5,
    subtitle: "Currently being worked on",
    icon: BriefcaseBusiness,
  },
  {
    title: "Total Spent",
    value: "$2,450",
    subtitle: "Total money paid",
    icon: Wallet,
  },
];

export default function ClientOverview() {
  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Client Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Manage your tasks and hire talented freelancers
          </p>
        </div>

        <Link
          href="/dashboard/client/post-task"
          className="btn border-0 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white"
        >
          <PlusCircle size={18} />
          Post New Task
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-3xl border border-purple-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 font-medium">
                    {item.title}
                  </p>

                  <h2 className="text-4xl font-bold mt-3 text-gray-900">
                    {item.value}
                  </h2>

                  <p className="text-sm text-gray-400 mt-3">
                    {item.subtitle}
                  </p>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">
                  <Icon className="text-purple-600" size={28} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}