'use client';

import { useEffect, useState } from 'react';
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

const FreelancerDashboardProfile = () => {
    const { data: session, isPending: sessionLoading } = authClient.useSession();
    const [freelancerData, setFreelancerData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch data using the provided API endpoint
    useEffect(() => {
        const fetchFreelancerProfile = async () => {
            if (!session?.user?.id) return;
            
            try {
                const res = await fetch(`http://localhost:5000/api/freelancer/${session.user.id}`);
                if (!res.ok) throw new Error('Failed to fetch freelancer profile');
                const data = await res.json();
                setFreelancerData(data);
            } catch (error) {
                console.error(error);
                toast.error('Could not load profile statistics.');
            } finally {
                setLoading(false);
            }
        };

        if (!sessionLoading) {
            fetchFreelancerProfile();
        }
    }, [session, sessionLoading]);

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const updatedProfile = Object.fromEntries(formData.entries());

        // Attach core session mappings
        updatedProfile.email = session?.user?.email;
        updatedProfile.updatedAt = new Date().toISOString();

        try {
            const res = await fetch(`http://localhost:5000/api/freelancer/${session?.user?.id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(updatedProfile),
            });

            console.log(res);
            if (res.ok) {
                toast.success('Freelancer profile updated successfully!');
                // console.log('object');
                // e.target.reset();  e.target.reset() works only for uncontrolled form fields.
            } else {
                throw new Error('Update failed');
            }
        } catch (error) {
            console.error(error);
            toast.error('Failed to update freelancer profile');
        }
    };

    if (sessionLoading || loading) {
        return (
            <div className="flex h-[60vh] items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-600 border-t-transparent"></div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto p-5 md:p-8">
            {/* Header section */}
            <div className="mb-8">
                <h1 className="text-4xl font-extrabold text-purple-700 bg-gradient-to-r from-purple-700 to-violet-600 bg-clip-text text-transparent">
                    Freelancer Workspace Profile
                </h1>
                <p className="text-gray-500 mt-2 text-lg">
                    Manage your professional micro-task portfolio identity, skills, and platform metrics.
                </p>
            </div>

           

            {/* Main Form Card Container */}
            <div className="bg-white rounded-3xl border border-purple-100 shadow-lg p-6 md:p-10">
                <form onSubmit={onSubmit} className="space-y-6">
                    
                    {/* Professional Bio / Headline */}
                    <TextField name="name" isRequired defaultValue={freelancerData?.name || session?.user?.name || ''}>
                        <Label className="font-semibold m-2">Full Professional Name</Label>
                        <Input
                            placeholder="Your public platform display name"
                            className="rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                        />
                        <FieldError />
                    </TextField>

                    {/* Skill Tags */}
                    <TextField name="skills" isRequired defaultValue={freelancerData?.skills || ''}>
                        <Label className="font-semibold m-2">Core Skills & Tags</Label>
                        <Input
                            placeholder="e.g. React, Tailwind CSS, Copywriting, Logo Design (comma-separated)"
                            className="rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                        />
                        <FieldError />
                    </TextField>

                    {/* Bio Description */}
                    <div className="w-full">
                        <TextField name="bio" isRequired defaultValue={freelancerData?.bio || ''} className="w-full flex flex-col gap-1.5">
                            <Label className="font-semibold">Professional Bio</Label>
                            <TextArea
                                placeholder="Describe your technical background, expertise, and what type of micro-tasks you handle with speed..."
                                className="w-full min-h-[140px] px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 hover:border-slate-300 transition-all duration-200 resize-y"
                            />
                            <p className="text-xs text-slate-400 mt-0.5 pl-1">
                                Let clients know your technical strengths to increase proposal conversion rates.
                            </p>
                            <FieldError className="text-xs text-rose-500 font-medium mt-1 pl-1" />
                        </TextField>
                    </div>

                    {/* Hourly Rate + Expected Delivery Window */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TextField name="hourlyRate" isRequired defaultValue={freelancerData?.hourlyRate || '25'}>
                            <Label className="font-semibold m-2">Minimum Hourly Rate (USD)</Label>
                            <Input
                                type="number"
                                placeholder="25"
                                className="rounded-2xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                            />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Form Action Utilities */}
                    <div className="flex flex-col md:flex-row gap-4 pt-4">
                        <Button
                            type="reset"
                            variant="outline"
                            className="rounded-full md:w-40 border-2 border-purple-600 text-purple-700 font-medium hover:bg-purple-50 transition-all"
                        >
                            Reset Changes
                        </Button>

                        <Button
                            type="submit"
                            className="flex-1 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold hover:from-purple-700 hover:to-violet-700 shadow-md shadow-purple-600/20 transition-all px-3 py-1"
                        >
                            Save Profile Updates
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FreelancerDashboardProfile;