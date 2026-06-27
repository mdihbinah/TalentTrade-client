'use client';

import { authClient } from '@/app/lib/auth-client';
import {
    Button,
    FieldError,
    Input,
    Label,
    TextArea,
    TextField,
} from '@heroui/react';
import { toast } from 'react-toastify';
import { IoPaperPlaneOutline } from 'react-icons/io5';

const SubmitProposalPage = ({ taskId }) => {
    const { data: session } = authClient.useSession();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const proposalInfo = Object.fromEntries(formData.entries());

        // Construct backend keys matching your existing patterns
        proposalInfo.freelancer_email = session?.user?.email;
        proposalInfo.freelancer_id = session?.user?.id;
        proposalInfo.task_id = taskId; // passed as prop or from params
        proposalInfo.status = 'Pending';
        proposalInfo.createdAt = new Date().toISOString();

        console.log(proposalInfo);

        const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/proposals`,
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(proposalInfo),
                }
            );

            const data = await res.json();

            if (data) {
                toast.success('Proposal submitted successfully!');
                e.target.reset();
            }
    };

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8">
            {/* Main Form Container Card */}
            <div className="bg-white rounded-[32px] border border-purple-100 shadow-md p-6 md:p-8">
                
                {/* Header Icon + Title */}
                <div className="flex items-center gap-3 mb-6">
                    <IoPaperPlaneOutline className="text-2xl md:text-3xl text-purple-600 transform rotate-[15deg]" />
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                        Submit a Proposal
                    </h2>
                </div>

                <form onSubmit={onSubmit} className="space-y-6">
                    
                    {/* Top Row: Budget & Estimated Days */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Proposed Budget */}
                        <TextField name="budget" isRequired className="w-full flex flex-col gap-2">
                            <Label className="text-sm font-bold text-slate-900">
                                Proposed Budget (USD)
                            </Label>
                            <Input
                                type="number"
                                placeholder="e.g. 50.00"
                                className="w-full px-4 py-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200"
                            />
                            <FieldError className="text-xs text-rose-500 font-medium pl-1" />
                        </TextField>

                        {/* Estimated Days */}
                        <TextField name="estimated_days" isRequired className="w-full flex flex-col gap-2">
                            <Label className="text-sm font-bold text-slate-900">
                                Estimated Days
                            </Label>
                            <Input
                                type="number"
                                placeholder="e.g. 3"
                                className="w-full px-4 py-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200"
                            />
                            <FieldError className="text-xs text-rose-500 font-medium pl-1" />
                        </TextField>
                    </div>

                    {/* Cover Note Field */}
                    <TextField name="cover_note" isRequired className="w-full flex flex-col gap-2">
                        <Label className="text-sm font-bold text-slate-900">
                            Cover Note
                        </Label>
                        <TextArea
                            placeholder="Explain why you're the best fit for this task..."
                            className="w-full min-h-[120px] px-4 py-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200 resize-y"
                        />
                        <FieldError className="text-xs text-rose-500 font-medium pl-1" />
                    </TextField>

                    {/* Action Submit Button */}
                    <div className="pt-2">
                        <Button
                            type="submit"
                            className="w-full py-4 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-700 active:bg-purple-800 transition-colors duration-200 text-base shadow-sm"
                        >
                            Submit Proposal
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubmitProposalPage;