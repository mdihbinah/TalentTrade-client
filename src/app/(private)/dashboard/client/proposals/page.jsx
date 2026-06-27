import React from 'react';

const ProposalPage = () => {
    return (
        <div>
            Proposal
        </div>
    );
};

export default ProposalPage;










// 'use client';

// import Link from 'next/link';
// import {
//   FaUser,
//   FaEnvelope,
//   FaMoneyBillWave,
//   FaCalendarAlt,
//   FaClock,
//   FaCheck,
//   FaTimes,
// } from 'react-icons/fa';
// import { toast } from 'react-toastify';



// export default async function ProposalCard() {

//     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/proposal`)
//     const proposal = await res.json();

//   return (
//     <div className="bg-white rounded-2xl border border-purple-100 shadow-sm hover:shadow-lg transition-all p-6">

//       {/* Header */}
//       <div className="flex items-center justify-between mb-5">
//         <h2 className="text-xl font-bold text-purple-700">
//           Proposal
//         </h2>

//         <span
//           className={`px-4 py-1 rounded-full text-sm font-semibold
//           ${
//             proposal.status === 'Accepted'
//               ? 'bg-green-100 text-green-700'
//               : proposal.status === 'Rejected'
//               ? 'bg-red-100 text-red-700'
//               : 'bg-purple-100 text-purple-700'
//           }`}
//         >
//           {proposal.status}
//         </span>
//       </div>

//       {/* Information */}

//       <div className="space-y-4 text-gray-700">

//         <div className="flex items-center gap-3">
//           <FaEnvelope className="text-purple-600" />
//           <span>{proposal.freelancer_email}</span>
//         </div>

//         <div className="flex items-center gap-3">
//           <FaMoneyBillWave className="text-purple-600" />
//           <span>${proposal.budget}</span>
//         </div>

//         <div className="flex items-center gap-3">
//           <FaClock className="text-purple-600" />
//           <span>{proposal.estimated_days} Days</span>
//         </div>

//         <div className="flex items-start gap-3">
//           <FaUser className="text-purple-600 mt-1" />
//           <p>{proposal.cover_note}</p>
//         </div>

//         <div className="flex items-center gap-3">
//           <FaCalendarAlt className="text-purple-600" />
//           <span>
//             {new Date(proposal.createdAt).toLocaleDateString()}
//           </span>
//         </div>

//       </div>

//       {/* Actions */}

//       {proposal.status === 'Pending' && (
//         <div className="flex gap-4 mt-8">

//           <Link
//             href={`/dashboard/client/payment/${proposal._id}`}
//             className="flex-1"
//           >
//             <button
//               className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
//             >
//               <FaCheck />
//               Accept
//             </button>
//           </Link>

//           <button
//             className="flex-1 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
//           >
//             <FaTimes />
//             Reject
//           </button>

//         </div>
//       )}

//       {proposal.status === 'Accepted' && (
//         <Link href={`/dashboard/client/payment/${proposal._id}`}>
//           <button className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold">
//             Go to Payment
//           </button>
//         </Link>
//       )}
//     </div>
//   );
// }