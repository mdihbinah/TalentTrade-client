'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-purple-50 via-white to-white overflow-hidden">
      
      {/* Background blur effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-400/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-violet-400/20 blur-[100px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-purple-50 text-purple-700 text-sm"
        >
          ✨ The modern freelance platform
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-gray-900"
        >
          Get your tasks done by{" "}
          <span className="text-purple-600">skilled freelancers</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-600 max-w-2xl mx-auto"
        >
          SkillSwap connects clients with skilled freelancers for micro-tasks.
          Post tasks, receive proposals, hire talent, and pay securely — all in one platform.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/dashboard/client"
            className="px-6 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition shadow-lg shadow-purple-200 flex items-center gap-2"
          >
            Post a Task <ArrowRight size={18} />
          </Link>

          <Link
            href="/browse-tasks"
            className="px-6 py-3 rounded-xl border border-purple-300 text-purple-700 font-medium hover:bg-purple-200 transition"
          >
            Browse Tasks
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          <div className="p-4 rounded-xl bg-white shadow-sm border">
            <h3 className="text-2xl font-bold text-purple-600">2+</h3>
            <p className="text-gray-500 text-sm">Tasks Posted</p>
          </div>

          <div className="p-4 rounded-xl bg-white shadow-sm border">
            <h3 className="text-2xl font-bold text-purple-600">6+</h3>
            <p className="text-gray-500 text-sm">Users</p>
          </div>

          <div className="p-4 rounded-xl bg-white shadow-sm border">
            <h3 className="text-2xl font-bold text-purple-600">$90</h3>
            <p className="text-gray-500 text-sm">Total Payout</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}