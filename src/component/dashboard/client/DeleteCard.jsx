'use client'

import { redirect } from 'next/navigation';
import { MdDeleteOutline } from 'react-icons/md';

const DeleteCard = ({taskId}) => {
    // const handleDelete = async () => {
    //     fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/task/${id}`,{
    //         method: 
    //     })
    // }

    const handleDelete = async () => {
        // const { data: tokenData } = await authClient.token()
        // console.log('ttttttttt', tokenData);
        console.log('Task Delete');
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/task/${taskId}`, {
            method: 'DELETE',
            headers: {
                // authorization: `Bearer ${tokenData?.token}`
            }
        })

        redirect(`/dashboard/client/tasks`)
    }

    return (
        <div onClick={handleDelete}>
            <button 
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-red-300 text-red-600 hover:bg-red-50"
            >
                <MdDeleteOutline size={22} />
                Delete
            </button>
        </div>
    );
};

export default DeleteCard;