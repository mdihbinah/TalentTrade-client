'use client'
import { authClient } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";



const ForToggle = ({ user }) => {
    // const [toggle, setToggle] = useState(user.isBlocked)
    const router = useRouter()

    const handleUpdate = async () => {
        // setToggle(!toggle)
        const { data: tokenData } = await authClient.token()
        // console.log('e', tokenData);
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/${user._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                //   authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify({
                isBlocked: !user.isBlocked
            })

        })

        if (!res.ok) {
            console.log('Update failed');
        }

        router.refresh();
    }
    return (
        <div>
            <button
                className={`${user.isBlocked ? 'text-green-500 hover:text-green-700': 'text-red-500 hover:text-red-700'} py-1 px-2`}
                onClick={()=>{handleUpdate()}}
            >
                {user.isBlocked ? "Unblock" : 'Block'}
            </button>
        </div>
    );
};

export default ForToggle;