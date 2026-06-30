"use client"
import { Button, FieldError, Input, Label, ListBox, Select, Modal, Surface, TextField, TextArea } from "@heroui/react";
import { BsEnvelope } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

const EditTask = ({ task }) => {

    const onSubmit = async (e) => {
        // e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const taskInfo = Object.fromEntries(formData.entries())
        console.log(taskInfo)


        // const { data: tokenData } = await authClient.token()
        // console.log('ee', tokenData);
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/task/${task._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(taskInfo)
        })

    }
    return (
        <div>
            <form onSubmit={onSubmit}
                className="p-3 space-y-8 w-lg"
            >
                {/* Task Title */}
                <TextField name="title" defaultValue={task.title} isRequired>
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
                    <TextField name="description" defaultValue={task.description} isRequired className="w-full flex flex-col gap-1.5">
                        <Label className="font-semibold">
                            Detailed Description
                        </Label>
                        <TextArea
                            placeholder="Outline the exact deliverables, technical stack requirements, rules, and background contexts for this micro-task..."
                            className="w-full min-h-[140px] px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 hover:border-slate-300 transition-all duration-200 resize-y"
                        />
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 pl-1">
                            Provide clear step-by-step requirements to help freelancers submit accurate proposals.
                        </p>
                        <FieldError className="text-xs text-rose-500 font-medium mt-1 animate-fadeIn pl-1" />
                    </TextField>
                </div>

                {/* Budget + Deadline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TextField name="budget" defaultValue={task.budget} isRequired>
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

                    <TextField name="deadline" defaultValue={task.deadline} isRequired>
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

                <Button
                    type="submit"
                    variant="outline"
                    className="rounded-full w-full bg-blue-600 text-white"
                >
                    Add Update Task Data
                </Button>
            </form>
        </div>
    );
};

export default EditTask;