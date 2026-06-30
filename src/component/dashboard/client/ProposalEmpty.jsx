import { FaRegFolderOpen } from "react-icons/fa";

export default function ProposalEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-16">

      <FaRegFolderOpen
        size={60}
        className="text-purple-300"
      />

      <h3 className="mt-5 text-2xl font-semibold">
        No Proposals Yet
      </h3>

      <p className="text-gray-500 mt-2">
        Freelancers will apply to your task soon.
      </p>

    </div>
  );
}