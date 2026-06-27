'use client'
import { authClient } from '@/app/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { FiTrash2 } from 'react-icons/fi';

const DeleteTask = ({job}) => {
const router = useRouter()
    const handleDelete = async() => {
      const { data: tokenData } = await authClient.token()
        // console.log('ttttttttt', tokenData);
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/task/${job._id}`, {
            method: 'DELETE',
            headers: {
            //   authorization: `Bearer ${tokenData?.token}`
            }
        })

        router.push(`/dashboard/admin/tasks`)
    }

    
    return (
        <div>
            <AlertDialog>
                <Button variant="danger"><FiTrash2 /></Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[350px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete This Task permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleDelete} slot="close" variant="danger">
                                    <FiTrash2 />
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteTask;