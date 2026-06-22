'use client'

import { authClient } from "@/app/lib/auth-client";
import NavLink from "./NavLink";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LuBrainCog } from "react-icons/lu";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";

const links = <>
  <NavLink path="/" data="Home" />
  <NavLink path="/browse-tasks" data="Browse Tasks" />
  <NavLink path="/browse-freelancers" data="Browse Freelancers" />
</>

const NavBar = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const pathname = usePathname()
  if (pathname.includes('dashboard')) {
    return null;
  }
  
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin");
        },
      },
    });
  };

  return (
    <div className="sticky top-0 z-50 backdrop-blur-sm bg-white/40 border-b border-purple-100 shadow-sm">

      <div className="navbar max-w-7xl mx-auto px-3">

        {/* Left */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[99] p-3 shadow-xl bg-white rounded-xl w-56 border border-purple-100"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-extrabold"
          >
            <div className="bg-gradient-to-r from-violet-600 to-purple-700 p-2 rounded-xl text-white shadow-lg">
              <LuBrainCog size={24} />
            </div>

            <span className="bg-gradient-to-r from-violet-500 to-purple-800 bg-clip-text text-transparent duration-200 tracking-wide">
              TalentTrade
            </span>
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 font-medium">
            {links}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end gap-3">

          {user ? (
            <>
              {/* Notification */}
              <button className="btn btn-circle btn-ghost">
                <IoNotificationsOutline
                  size={22}
                  className="text-purple-700"
                />
              </button>

              {/* Dashboard */}
              <Link
                href={`/dashboard/${user.role}`}
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-700 text-white hover:scale-105 duration-300 shadow-lg"
              >
                <MdOutlineDashboardCustomize size={20} />
                Dashboard
              </Link>

              {/* Avatar */}
              <div className="dropdown dropdown-end">

                <div
                  tabIndex={0}
                  role="button"
                  className="avatar cursor-pointer"
                >
                  <div className="w-11 rounded-full ring ring-purple-400 ring-offset-2">
                    <img src={user.image} alt="user" />
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className="menu dropdown-content mt-4 z-[99] p-3 shadow-xl bg-white rounded-xl w-56 border border-purple-100"
                >
                  <li>
                    <Link href="/profile">Profile</Link>
                  </li>

                  <li>
                    <Link href="/dashboard">Dashboard</Link>
                  </li>

                  <li>
                    <button
                      onClick={handleSignOut}
                      className="text-red-500"
                    >
                      Logout
                    </button>
                  </li>
                </ul>

              </div>
            </>
          ) : (
            <>
              <Link href="/signin">
                <button className="btn border-2 border-purple-600 text-purple-700 bg-transparent hover:bg-purple-50">
                  Sign In
                </button>
              </Link>

              <Link href="/signup">
                <button className="btn bg-gradient-to-r from-violet-600 to-purple-700 border-none text-white hover:scale-105 duration-300 shadow-lg">
                  Get Started
                </button>
              </Link>
            </>
          )}

        </div>

      </div>

    </div>
  );
};

export default NavBar;