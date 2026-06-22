import { FaTasks, FaFileSignature, FaHandshake } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Post a Task",
      description:
        "Describe your project, set a budget, and publish your task for skilled freelancers.",
      icon: <FaTasks />,
      color: "from-purple-600 to-violet-700",
    },
    {
      id: "02",
      title: "Get Proposals",
      description:
        "Receive proposals from talented freelancers and compare their skills, price, and experience.",
      icon: <FaFileSignature />,
      color: "from-fuchsia-600 to-purple-600",
    },
    {
      id: "03",
      title: "Hire & Pay",
      description:
        "Choose the best freelancer, complete secure payment, and get your work delivered.",
      icon: <FaHandshake />,
      color: "from-violet-600 to-indigo-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-5">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-purple-600 font-semibold uppercase tracking-widest">
            How It Works
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Get Work Done in
            <span className="text-purple-600"> 3 Simple Steps</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-500">
            TalentTrade connects clients and freelancers through a simple,
            secure, and efficient workflow.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white rounded-3xl p-8 shadow-lg border border-purple-100 hover:-translate-y-2 duration-300"
            >
              {/* Number */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} text-white flex items-center justify-center text-xl font-bold shadow-lg`}
              >
                {step.id}
              </div>

              {/* Icon */}
              <div className="text-4xl text-purple-600 mt-6">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mt-4">
                {step.title}
              </h3>

              <p className="text-gray-500 mt-3 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;