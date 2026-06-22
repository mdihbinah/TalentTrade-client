// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { Drawer, Button } from "@heroui/react";
// import { RiDashboardLine } from "react-icons/ri";
// import { FaHistory, FaPlusCircle, FaTasks, FaUserEdit } from "react-icons/fa";
// import { MdLocalOffer, MdPayment } from "react-icons/md";
// import { FaBriefcase, FaPaperPlane, FaUsers, FaWallet } from "react-icons/fa6";
// import { LuMenu } from "react-icons/lu";



// export default function DashboardSidebar({ session }) {
//   const pathname = usePathname();
//   const role = session?.user?.role || "buyer";

// //   // Navigation schema configured cleanly with React Icons mapping
  // const session = await auth.api.getSession({
  //       headers: await headers(),
  //   });

  //   const user = session?.user;
  //   const role = user?.role
  //   console.log(role);

//     const dashboardItems = {
//   client: [
//     {
//       name: "Overview",
//       icon: RiDashboardLine,
//       path: "/dashboard/client",
//     },
//     {
//       name: "Post a Task",
//       icon: FaPlusCircle,
//       path: "/dashboard/client/post",
//     },
//     {
//       name: "My Tasks",
//       icon: FaTasks,
//       path: "/dashboard/client/tasks",
//     },
//     {
//       name: "Received Proposals",
//       icon: MdLocalOffer,
//       path: "/dashboard/client/proposals",
//     },
//     {
//       name: "Payments",
//       icon: MdPayment,
//       path: "/dashboard/client/payments",
//     },
//   ],

//   freelancer: [
//     {
//       name: "Overview",
//       icon: RiDashboardLine,
//       path: "/dashboard/freelancer",
//     },
//     {
//       name: "My Proposals",
//       icon: FaPaperPlane,
//       path: "/dashboard/freelancer/proposals",
//     },
//     {
//       name: "Active Projects",
//       icon: FaBriefcase,
//       path: "/dashboard/freelancer/projects",
//     },
//     {
//       name: "My Earnings",
//       icon: FaWallet,
//       path: "/dashboard/freelancer/earnings",
//     },
//     {
//       name: "Edit Profile",
//       icon: FaUserEdit,
//       path: "/dashboard/freelancer/profile",
//     },
//   ],

//   admin: [
//     {
//       name: "Overview",
//       icon: RiDashboardLine,
//       path: "/dashboard/admin",
//     },
//     {
//       name: "Manage Users",
//       icon: FaUsers,
//       path: "/dashboard/admin/users",
//     },
//     {
//       name: "Manage Tasks",
//       icon: FaTasks,
//       path: "/dashboard/admin/tasks",
//     },
//     {
//       name: "Transactions",
//       icon: FaHistory,
//       path: "/dashboard/admin/transactions",
//     },
//   ],
// };

//   const navItems = dashboardItems[role] || dashboardItems.freelancer;

//   // Reusable Nav Links element to handle both Mobile Drawer and Desktop Sidebar views
//   const RenderNavLinks = () => (
//     <>
//       {navItems.map((item) => {
//         const isActive = pathname === item.path;
//         return (
//           <Link key={item.name} href={item.path} className="w-full block">
//             <button
//               type="button"
//               className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 outline-none
//                 ${isActive 
//                   ? "bg-purple-50 text-purple-700 font-semibold shadow-sm shadow-purple-100" 
//                   : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                 }`}
//             >
//               <item.icon 
//                 className={`w-5 h-5 transition-colors ${isActive ? "text-purple-600" : "text-slate-400"}`} 
//               />
//               {item.name}
//             </button>
//           </Link>
//         );
//       })}
//     </>
//   );

//   return (
//     <div className="h-screen flex flex-col">
//       {/* Mobile Drawer Navigation Layer */}
//       <div className="p-3 md:hidden flex items-center border-b border-slate-200 bg-white">
//         <Drawer>
//           <Button variant="flat" className="bg-purple-50 text-purple-700" isIconOnly>
//             <LuMenu className="w-5 h-5" />
//           </Button>
//           <Drawer.Backdrop>
//             <Drawer.Content placement="left" className="max-w-[260px]">
//               <Drawer.Dialog className="bg-white p-4 h-full">
//                 <Drawer.CloseTrigger />
//                 <Drawer.Header className="px-2 py-4">
//                   <Drawer.Heading className="text-purple-700 font-bold">Navigation</Drawer.Heading>
//                 </Drawer.Header>
//                 <Drawer.Body className="p-0">
//                   <nav className="flex flex-col gap-1.5 mt-2">
//                     {RenderNavLinks()}
//                   </nav>
//                 </Drawer.Body>
//               </Drawer.Dialog>
//             </Drawer.Content>
//           </Drawer.Backdrop>
//         </Drawer>
//       </div>

//       {/* Main Persistent Desktop Sidebar Layout */}
//       <aside className="hidden md:flex flex-col gap-2 w-[240px] h-full bg-white border-r border-slate-200 px-4 py-6 select-none">
//         {/* Brand/Logo Header Section */}
//         <div className="w-full px-2 mb-6 flex items-center justify-center">
//           <Image
//             src="/logo-xl.png"
//             height={100}
//             width={100}
//             className="h-10 w-auto object-contain"
//             alt="Logo"
//             priority
//           />
//         </div>

//         {/* Dynamic Action Links List */}
//         <nav className="flex flex-col gap-1.5 w-full">
//           {RenderNavLinks()}
//         </nav>
//       </aside>
//     </div>
//   );
// }