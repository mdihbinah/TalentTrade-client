'use client'
import NavLink from "./NavLink";
import Link from "next/link";
// import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { LuBrainCog } from "react-icons/lu";

const links = <>
    <NavLink path={'/'} data={'Home'}></NavLink>
    <NavLink path={'/browse-tasks'} data={'Browse Tasks'}></NavLink>
    <NavLink path={'/browse-freelancers'} data={'Browse Freelancers'}></NavLink>
</>

const NavBar = () => {
    // const { data: session, isPending } = authClient.useSession()
    // const router = useRouter()
    // // console.log(session, isPending);
    // const user = session?.user

    // const handleSignOut = async() => {
    //     await authClient.signOut({
    //         fetchOptions: {
    //             onSuccess: () => {
    //                 router.push("/signin")
    //             },
    //         },
    //     });
    // }
    return <div>
      <div className="navbar bg-base-100 shadow-sm">

        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul className="menu menu-sm dropdown-content z-[50] bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>

          <Link href={'/'} className="btn btn-ghost text-xl font-bold">
            <span className="text-violet-600 font-extrabold">
              <LuBrainCog />
            </span>
            <span className="text-violet-600">Talent</span>
            Trade
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

        {/* Navbar End */}
        {/* <div className="navbar-end space-x-3">

          {user ? (
            <div className="dropdown dropdown-end mr-3 z-20">

              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 h-10 rounded-full">
                  <img
                    alt="user"
                    src={user?.image}
                  />
                </div>
              </div>

              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                <NavLink path={'/add-car'} data={'Add Car'} />
                <NavLink path={'/my-bookings'} data={'My Bookings'} />
                <NavLink path={'/my-added-cars'} data={'My Added Cars'} />

                <button
                  onClick={handleSignOut}
                  className="btn bg-violet-600 text-white hover:bg-violet-700 mt-2"
                >
                  Sign Out
                </button>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link href={'/signin'}>
                <button className="btn bg-violet-600 text-white hover:bg-violet-700">
                  Sign In
                </button>
              </Link>

              <Link href={'/signup'}>
                <button className="hidden md:flex btn bg-violet-600 text-white hover:bg-violet-700">
                  Sign Up
                </button>
              </Link>
            </div>
          )}

        </div> */}
      </div>
    </div>
};

export default NavBar;