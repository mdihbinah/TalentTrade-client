'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { LuBrainCog } from "react-icons/lu";

const Footer = () => {
    const pathname = usePathname()
      if (pathname.includes('dashboard')) {
        return null;
      }
    return (
        <footer className="bg-gradient-to-r from-purple-950 via-purple-900 to-purple-800 text-white mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Logo + About */}
                <div>
                    <Link href={'/'} className="btn btn-ghost text-xl font-bold">
                        <span className="text-violet-600 font-extrabold">
                            <LuBrainCog />
                        </span>
                        <span className="text-violet-600">Talent</span>
                        Trade
                    </Link>
                    <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                        A freelance micro-task marketplace where clients post tasks and freelancers get hired instantly.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-gray-300">
                        <li><Link href="/" className="hover:text-purple-300">Home</Link></li>
                        <li><Link href="/browse-tasks" className="hover:text-purple-300">Browse Tasks</Link></li>
                        <li><Link href="/browse-freelancers" className="hover:text-purple-300">Browse Freelancers</Link></li>
                        <li><Link href="/login" className="hover:text-purple-300">Login</Link></li>
                    </ul>
                </div>

                {/* Dashboard Links */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
                    <ul className="space-y-2 text-gray-300">
                        <li><Link href="/dashboard/client" className="hover:text-purple-300">Client Dashboard</Link></li>
                        <li><Link href="/dashboard/freelancer" className="hover:text-purple-300">Freelancer Dashboard</Link></li>
                        <li><Link href="/dashboard/admin" className="hover:text-purple-300">Admin Panel</Link></li>
                    </ul>
                </div>

                {/* Contact + Social */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Contact</h2>
                    <p className="text-gray-300 text-sm">
                        Email: support@talent-trade.com
                    </p>

                    <div className="flex gap-4 mt-4 text-xl">
                        <a href="#" className="hover:text-purple-300">
                            <FaXTwitter />
                        </a>
                        <a href="#" className="hover:text-purple-300">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-purple-300">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-purple-300">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-purple-700/40 text-center py-4 text-sm text-gray-300">
                © {new Date().getFullYear()} TalentTrade. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;