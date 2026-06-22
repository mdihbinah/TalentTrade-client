


export default async function FreelancerProfile({ params }) {
  const { id } = await params
  const res = await fetch(`${process.env.SERVER_URL}/api/freelancer/${id}`)
  const freelancer = await res.json();
  console.log(freelancer)

  // if (loading) {
  //   return (
  //     <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center py-12">
  //       <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-600"></div>
  //       <p className="mt-4 text-purple-800 font-medium animate-pulse">Loading expert workspace profile...</p>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 transition-colors duration-200">

      {/* Dynamic Purple Header Hero Aspect Banner */}
      <div className="bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 h-48 md:h-64 relative w-full">
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      {/* Main Container Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-32 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT & CENTER COLUMNS: Profile Header & Tabbed Feed */}
          <div className="lg:col-span-2 space-y-6">

            {/* Primary Profile Stats Header Identity Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                <img
                  src={freelancer.image}
                  alt={freelancer.name}
                  className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover ring-4 ring-white shadow-md -mt-14 sm:-mt-20 bg-white"
                />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 flex items-center justify-center sm:justify-start gap-2">
                        {freelancer.name}
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">
                          Verified Expert
                        </span>
                      </h1>
                      <p className="text-purple-600 font-medium mt-0.5">{freelancer.location}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mt-4 leading-relaxed max-w-2xl">
                    {freelancer.bio}
                  </p>
                </div>
              </div>

              {/* Skills Tags Segment */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Core Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {freelancer.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-violet-50 text-violet-700 border border-violet-100 rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Navigation Tabs Controls */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              {/* <div className="flex border-b border-slate-100 bg-slate-50/50">
                <button
                  onClick={() => setActiveTab("portfolio")}
                  className={`flex-1 py-4 text-center text-sm font-bold border-b-2 transition-all ${activeTab === "portfolio"
                    ? "border-purple-600 text-purple-600 bg-white"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                    }`}
                >
                  Portfolio Projects
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`flex-1 py-4 text-center text-sm font-bold border-b-2 transition-all ${activeTab === "reviews"
                    ? "border-purple-600 text-purple-600 bg-white"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                    }`}
                >
                  Client Reviews ({freelancer.reviews.length})
                </button>
              </div> */}

              {/* Tab Display Viewports */}
              {/* <div className="p-6 md:p-8">
                {activeTab === "portfolio" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {freelancer.portfolio.map((project, idx) => (
                      <div key={idx} className="p-5 border border-slate-100 rounded-xl bg-slate-50/50 hover:bg-white hover:border-purple-200 hover:shadow-sm transition-all flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-slate-900 mb-1">{project.title}</h4>
                          <p className="text-xs text-slate-500 line-clamp-2">{project.desc}</p>
                        </div>
                        <div className="flex gap-1.5 mt-4">
                          {project.tags.map((t, i) => (
                            <span key={i} className="text-[11px] font-semibold tracking-wide bg-purple-50 text-purple-700 px-2 py-0.5 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {freelancer.reviews.map((review, idx) => (
                      <div key={idx} className="p-5 border border-slate-100 rounded-xl bg-slate-50/50">
                        <div className="flex justify-between items-start gap-2 mb-2">
                          <h4 className="font-bold text-slate-800 text-sm">{review.client}</h4>
                          <div className="flex items-center text-amber-400">
                            {[...Array(review.stars)].map((_, i) => (
                              <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-slate-600 text-xs italic leading-relaxed">"{review.comment}"</p>
                      </div>
                    ))}
                  </div>
                )}
              </div> */}
            </div>

          </div>

          {/* RIGHT COLUMN: Sticky Rate Metric Card & Call to Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 sticky top-6 space-y-6">

              {/* Primary Rate Assessment */}
              <div>
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block">Rate Structure</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl font-black text-slate-900">${freelancer.hourlyRate}</span>
                  <span className="text-slate-500 text-sm font-semibold">/ hour USD</span>
                </div>
              </div>

              <hr className="border-slate-100" />

              {/* Data Metric Aggregators Grid */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span className="text-purple-600 font-black text-lg block">{freelancer.rating}★</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-tight">Rating</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span className="text-slate-900 font-black text-lg block">{freelancer.finishedJobs}</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-tight">Jobs Done</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span className="text-emerald-600 font-black text-lg block">{freelancer.successRate}%</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-tight">Success</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button className="w-full py-3 px-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-xl font-bold shadow-md shadow-purple-200 transform active:scale-[0.99] transition-all text-sm">
                  Hire {freelancer.name.split(" ")[0]} Now
                </button>
                <button className="w-full py-3 px-4 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl font-semibold transition-all text-sm">
                  Send Direct Message
                </button>
              </div>

              {/* Platform Security/Trust Tagline */}
              <p className="text-[11px] text-slate-400 text-center leading-normal">
                Payments are held secure in escrow via SkillSwap verification until tasks are explicitly approved.
              </p>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}