import {
  FaPaintBrush,
  FaPenNib,
  FaCode,
  FaBullhorn,
  FaBriefcase,
} from "react-icons/fa";

const PopularCategories = () => {
  const categories = [
    {
      name: "Design",
      icon: <FaPaintBrush />,
      tasks: "120+ Tasks",
      bg: "bg-purple-100",
      text: "text-purple-700",
    },
    {
      name: "Writing",
      icon: <FaPenNib />,
      tasks: "95+ Tasks",
      bg: "bg-violet-100",
      text: "text-violet-700",
    },
    {
      name: "Development",
      icon: <FaCode />,
      tasks: "210+ Tasks",
      bg: "bg-fuchsia-100",
      text: "text-fuchsia-700",
    },
    {
      name: "Marketing",
      icon: <FaBullhorn />,
      tasks: "80+ Tasks",
      bg: "bg-purple-100",
      text: "text-purple-700",
    },
    {
      name: "Other",
      icon: <FaBriefcase />,
      tasks: "50+ Tasks",
      bg: "bg-violet-100",
      text: "text-violet-700",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-widest text-purple-600 font-semibold">
            Categories
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Popular
            <span className="text-purple-600"> Categories</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Explore thousands of freelance opportunities across different
            categories and find the perfect task for your skills.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.bg}
              rounded-3xl
              p-8
              text-center
              cursor-pointer
              border border-purple-100
              hover:shadow-xl
              hover:-translate-y-2
              duration-300`}
            >
              <div
                className={`text-4xl ${category.text} flex justify-center mb-4`}
              >
                {category.icon}
              </div>

              <h3
                className={`font-bold text-lg ${category.text}`}
              >
                {category.name}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {category.tasks}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;