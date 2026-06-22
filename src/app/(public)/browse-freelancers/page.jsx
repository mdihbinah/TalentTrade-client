
import Link from "next/link";

export default async function BrowseFreelancers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/freelancers`)
  const freelancers = await res.json();
  console.log(freelancers)
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-200">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Find Top On-Demand Talent
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Browse through specialized micro-task experts ready to take on your jobs today.
          </p>
        </div>
      </div>


      {/* Main Grid Content Display */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelancers.map((freelancer) => (
            <div
              key={freelancer._id || freelancer.email}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full"
            >
              <div>
                {/* Profile Header Block */}
                <div className="flex items-start space-x-4">
                  <img
                    src={freelancer.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"}
                    alt={freelancer.name}
                    className="w-14 h-14 rounded-full object-cover border border-gray-100 flex-shrink-0"
                  />
                  <div className="overflow-hidden">
                    <h3 className="font-bold text-lg text-gray-900 truncate">
                      {freelancer.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-semibold">
                      ${freelancer.hourlyRate || "25"}/hr
                    </p>
                  </div>
                </div>

                {/* Biography Summary */}
                <p className="text-gray-600 text-sm mt-4 line-clamp-3">
                  {freelancer.bio || "No professional profile bio description added yet."}
                </p>

                {/* Skill Category Badges */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {freelancer.skills && freelancer.skills.length > 0 ? (
                    freelancer.skills.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 bg-gray-100 text-gray-800 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-gray-400 italic">No tags listed</span>
                  )}
                </div>
              </div>

              {/* Card Action Section Footer */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-bold text-gray-900">
                    {freelancer.rating || "4.8"}
                  </span>
                  <span className="text-xs text-gray-400">
                    ({freelancer.finishedJobs || "0"} jobs)
                  </span>
                </div>

                <Link
                  href={`/freelancers/${freelancer._id || "view"}`}
                  className="inline-flex items-center justify-center px-4 py-2 bg-purple-600 hover:bg-purple-800 text-white text-xs font-bold rounded-lg transition-all shadow-sm"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}