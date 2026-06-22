import {
  FaTasks,
  FaUserTie,
  FaCreditCard,
  FaStar,
  FaBolt,
  FaUserShield,
} from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaTasks />,
      title: "Post Tasks Easily",
      description:
        "Create freelance tasks with budget, category, and deadline in just a few clicks.",
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      icon: <FaUserTie />,
      title: "Hire Skilled Freelancers",
      description:
        "Browse talented freelancers, review proposals, and hire the best match.",
      color: "text-violet-600",
      bg: "bg-violet-100",
    },
    {
      icon: <FaCreditCard />,
      title: "Secure Payments",
      description:
        "Safe Stripe-powered payments ensure trust between clients and freelancers.",
      color: "text-fuchsia-600",
      bg: "bg-fuchsia-100",
    },
    {
      icon: <FaStar />,
      title: "Reviews & Ratings",
      description:
        "Build credibility through ratings and feedback after every completed task.",
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      icon: <FaBolt />,
      title: "Fast Hiring Process",
      description:
        "Receive proposals quickly and start your project without long delays.",
      color: "text-violet-600",
      bg: "bg-violet-100",
    },
    {
      icon: <FaUserShield />,
      title: "Role-Based Dashboard",
      description:
        "Dedicated dashboards for Clients, Freelancers, and Administrators.",
      color: "text-fuchsia-600",
      bg: "bg-fuchsia-100",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-widest text-purple-600 font-semibold">
            Features
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Everything You Need To
            <span className="text-purple-600"> Succeed</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-500">
            TalentTrade provides all the tools required to connect clients and
            freelancers in one secure and efficient marketplace.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-purple-100 shadow-sm hover:shadow-xl hover:-translate-y-2 duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center text-2xl ${feature.color}`}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mt-5">
                {feature.title}
              </h3>

              <p className="text-gray-500 mt-3 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;