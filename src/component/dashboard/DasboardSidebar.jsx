"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer, Button } from "@heroui/react";

import { RiDashboardLine } from "react-icons/ri";
import { FaHistory, FaPlusCircle, FaTasks } from "react-icons/fa";
import { MdLocalOffer, MdPayment } from "react-icons/md";
import { FaBriefcase, FaPaperPlane, FaUsers, FaWallet } from "react-icons/fa6";
import { LuBrainCog, LuMenu } from "react-icons/lu";

import { authClient } from "@/app/lib/auth-client";

export default function DashboardSidebar() {
  const pathname = usePathname();

  const { data: session, isPending } = authClient.useSession();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted || isPending) {
    return null;
  }

  const role = session?.user?.role || "freelancer";

  const dashboardItems = {
    client: [
      {
        name: "Overview",
        icon: RiDashboardLine,
        path: "/dashboard/client",
      },
      {
        name: "My Tasks",
        icon: FaTasks,
        path: "/dashboard/client/tasks",
      },
      {
        name: "Post a Task",
        icon: FaPlusCircle,
        path: "/dashboard/client/post",
      },
      {
        name: "Received Proposals",
        icon: MdLocalOffer,
        path: "/dashboard/client/proposals",
      },
      {
        name: "Payments",
        icon: MdPayment,
        path: "/dashboard/client/payments",
      },
    ],

    freelancer: [
      {
        name: "Overview",
        icon: RiDashboardLine,
        path: "/dashboard/freelancer",
      },
      {
        name: "My Proposals",
        icon: FaPaperPlane,
        path: "/dashboard/freelancer/proposals",
      },
      {
        name: "Active Projects",
        icon: FaBriefcase,
        path: "/dashboard/freelancer/projects",
      },
      {
        name: "My Earnings",
        icon: FaWallet,
        path: "/dashboard/freelancer/earnings",
      },
      {
        name: "Edit Profile",
        icon: FaWallet,
        path: "/dashboard/freelancer/edit-profile",
      },
    ],

    admin: [
      {
        name: "Overview",
        icon: RiDashboardLine,
        path: "/dashboard/admin",
      },
      {
        name: "Manage Users",
        icon: FaUsers,
        path: "/dashboard/admin/users",
      },
      {
        name: "Manage Tasks",
        icon: FaTasks,
        path: "/dashboard/admin/tasks",
      },
      {
        name: "Transactions",
        icon: FaHistory,
        path: "/dashboard/admin/transactions",
      },
    ],
  };

  const navItems = dashboardItems[role] || [];

  function RenderNavLinks() {
    return (
      <>
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.name}
              href={item.path}
              className="w-full block"
            >
              <button
                type="button"
                className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 outline-none
                ${
                  isActive
                    ? "bg-purple-50 text-purple-700 font-semibold shadow-sm shadow-purple-100"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <item.icon
                  className={`w-5 h-5 ${
                    isActive
                      ? "text-purple-600"
                      : "text-slate-400"
                  }`}
                />

                {item.name}
              </button>
            </Link>
          );
        })}
      </>
    );
  }

  return (
    <div className="h-screen flex flex-col">

      {/* Mobile */}
      <div className="p-3 md:hidden flex items-center border-b border-slate-200 bg-white">
        <Drawer>
          <Button
            variant="flat"
            className="bg-purple-50 text-purple-700"
            isIconOnly
          >
            <LuMenu className="w-5 h-5" />
          </Button>

          <Drawer.Backdrop>
            <Drawer.Content
              placement="left"
              className="max-w-[260px]"
            >
              <Drawer.Dialog className="bg-white p-4 h-full">

                <Drawer.CloseTrigger />

                <Drawer.Header className="px-2 py-4">
                  <Drawer.Heading className="text-purple-700 font-bold">
                    Navigation
                  </Drawer.Heading>
                </Drawer.Header>

                <Drawer.Body className="p-0">
                  <nav className="flex flex-col gap-1.5 mt-2">
                    <RenderNavLinks />
                  </nav>
                </Drawer.Body>

              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>


      {/* Desktop */}
      <aside className="hidden md:flex flex-col gap-2 w-[240px] h-full bg-white border-r border-slate-200 px-4 py-6 select-none">

        <div className="w-full px-2 mb-6 flex items-center justify-center">

          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-extrabold"
          >

            <div className="bg-gradient-to-r from-violet-600 to-purple-700 p-2 rounded-xl text-white shadow-lg">
              <LuBrainCog size={24} />
            </div>


            <span className="bg-gradient-to-r from-violet-500 to-purple-800 bg-clip-text text-transparent tracking-wide">
              TalentTrade
            </span>

          </Link>

        </div>


        <nav className="flex flex-col gap-1.5 w-full">
          <RenderNavLinks />
        </nav>

      </aside>

    </div>
  );
}