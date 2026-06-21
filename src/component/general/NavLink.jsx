'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const NavLink = ({path, data}) => {
    const pathName = usePathname()
    return (
        <div>
            <li className={`font-bold m-1 ${path == pathName ? 'text-purple-600 tracking-wide font-extrabold rounded-md border-2 border-purple-600': ''}`}><Link href={path}>{data}</Link></li>
        </div>
    );
};

export default NavLink;