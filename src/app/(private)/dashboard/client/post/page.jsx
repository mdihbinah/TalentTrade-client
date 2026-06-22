'use client';

import { authClient } from '@/app/lib/auth-client';
import {
    Button,
    FieldError,
    Input,
    Label,
    ListBox,
    Select,
    TextArea,
    TextField,
} from '@heroui/react';
import { toast } from 'react-toastify';

const PostTaskPage = () => {
    const { data: session } = authClient.useSession();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const taskInfo = Object.fromEntries(formData.entries());

        taskInfo.client_email = session?.user?.email;
        taskInfo.client_id = session?.user?.id;
        taskInfo.status = 'Open';
        taskInfo.deliverable_url = '';
        taskInfo.createdAt = new Date().toISOString();

        console.log(taskInfo);
        try {
            // const { data: tokenData } = await authClient.token();
            // console.log(process.env.NEXT_PUBLIC_SERVER_URL);
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/tasks`,
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        // authorization: `Bearer ${tokenData?.token}`,
                    },
                    body: JSON.stringify(taskInfo),
                }
            );

            const data = await res.json();

            if (data.insertedId || data.success) {
                toast.success('Task posted successfully!');
                e.target.reset();
            }
        } catch (error) {
            console.log(error);
            toast.error('Failed to post task');
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-5 md:p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-extrabold text-purple-700">
                    Post a New Task
                </h1>

                <p className="text-gray-500 mt-2 text-lg">
                    Describe your task and set a budget to find talented freelancers.
                </p>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-3xl border border-purple-100 shadow-lg p-6 md:p-10">
                <form
                    onSubmit={onSubmit}
                    className="space-y-6"
                >
                    {/* Task Title */}
                    <TextField name="title" isRequired>
                        <Label className="font-semibold m-2">Task Title</Label>
                        <Input
                            placeholder="e.g. Design a landing page for my startup"
                            className="rounded-xl"
                        />
                        <FieldError />
                    </TextField>

                    {/* Category */}
                    <Label className="font-semibold">
                        Select Category
                    </Label>
                    <select
                        name="category"
                        type="category"
                        required
                        className="select select-bordered w-full focus:border-purple-500 focus:outline-none"
                    >
                        <option value="">Select</option>
                        <option value="design">Design</option>
                        <option value="writing">Writing</option>
                        <option value="development">Development</option>
                        <option value="marketing">Marketing</option>
                        <option value="other">Other</option>
                    </select>


                    {/* Task Description */}
                    <div className=" w-full">
                        <TextField name="description" isRequired className="w-full flex flex-col gap-1.5">
                            <Label className="font-semibold">
                                Detailed Description
                            </Label>
                            <TextArea
                                placeholder="Outline the exact deliverables, technical stack requirements, rules, and background contexts for this micro-task..."
                                className="w-full min-h-[140px] px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 hover:border-slate-300 transition-all duration-200 resize-y"
                            />
                            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 pl-1">
                                Provide clear step-by-step requirements to help freelancers submit accurate proposals.
                            </p>
                            <FieldError className="text-xs text-rose-500 font-medium mt-1 animate-fadeIn pl-1" />
                        </TextField>
                    </div>

                    {/* Budget + Deadline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TextField name="budget" isRequired>
                            <Label className="font-semibold m-2">
                                Budget (USD)
                            </Label>

                            <Input
                                type="number"
                                placeholder="500"
                                className="rounded-2xl"
                            />

                            <FieldError />
                        </TextField>

                        <TextField name="deadline" isRequired>
                            <Label className="font-semibold m-2">
                                Deadline Date
                            </Label>

                            <Input
                                type="date"
                                className="rounded-2xl"
                            />

                            <FieldError />
                        </TextField>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            className="rounded-full md:w-40 border-2 border-purple-600 hover:bg-purple-100"
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            className="flex-1 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-700 hover:to-violet-700 px-3 py-1"
                        >
                            Post Task
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostTaskPage;