import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="py-20 px-5">
      <div className="max-w-6xl mx-auto">

        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 p-12 md:p-20 text-center shadow-2xl">

          {/* Background Blur */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">

            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white font-medium mb-6">
              🚀 Join TalentTrade Today
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Start Your
              <span className="block mt-2">
                Freelance Journey?
              </span>
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-purple-100 text-lg">
              Whether you're looking to hire talented freelancers or earn money
              by completing tasks, TalentTrade makes the process simple,
              secure, and fast.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

              <Link href="/signup">
                <button className="btn bg-white text-purple-700 border-none hover:scale-105 duration-300 text-lg px-8">
                  Create Account
                  <FaArrowRight />
                </button>
              </Link>

              <Link href="/browse-tasks">
                <button className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8">
                  Browse Tasks
                </button>
              </Link>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;