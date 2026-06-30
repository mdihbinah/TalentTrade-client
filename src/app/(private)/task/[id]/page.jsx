import { auth } from "@/app/lib/auth";
import SubmitProposal from "@/component/general/submitProposal";
import {
  FiDollarSign,
  FiCalendar,
  FiClock,
  FiSend
} from "react-icons/fi";
const TaskDetails = async({params}) => {
    const {id} = await params
  //   const token = await auth.api.getToken({
  //   headers: await headers(),
  // });
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/task/${id}`)
    const task = await res.json();
    console.log(task)
    return (
        <main className="min-h-screen bg-gray-50 px-6 py-10">

      {/* Header */}
      <div className="mb-8">
        <div className="flex gap-3 mb-5">
          <span className="px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
            {task.category}
          </span>

          <span className="px-4 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
            {task.status}
          </span>
        </div>

        <h1 className="text-5xl font-bold text-gray-900">
          {task.title}
        </h1>
      </div>


      <div className="grid lg:grid-cols-3 gap-8">

        {/* Left Section */}
        <div className="lg:col-span-2">

          {/* Description Card */}
          <div className="bg-white border rounded-3xl p-8 shadow-sm">

            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Description
            </h2>

            <p className="text-gray-600 text-lg">
              {task.description}
            </p>

          </div>


          {/* Submit Proposal */}
          <div className="mt-8 bg-white border rounded-3xl p-8">

            <h2 className="text-2xl font-semibold mb-6">
              Submit a Proposal
            </h2>

            <SubmitProposal taskId={id}></SubmitProposal>

          </div>

        </div>



        {/* Right Card */}
        <div>

          <div className="bg-white border rounded-3xl p-8 shadow-sm space-y-8">


            {/* Budget */}
            <div className="flex items-center gap-5">

              <div className="text-purple-600 text-3xl">
                <FiDollarSign />
              </div>

              <div>
                <p className="text-gray-500">
                  Budget
                </p>

                <h3 className="text-3xl font-bold text-purple-600">
                  {task.budget}
                </h3>
              </div>

            </div>



            {/* Deadline */}
            <div className="flex items-center gap-5">

              <div className="text-purple-600 text-3xl">
                <FiCalendar />
              </div>

              <div>

                <p className="text-gray-500">
                  Deadline
                </p>

                <h3 className="text-xl font-semibold">
                  {new Date(task.deadline).toLocaleDateString()}
                </h3>

              </div>

            </div>




            {/* Posted */}
            <div className="flex items-center gap-5">

              <div className="text-purple-600 text-3xl">
                <FiClock />
              </div>

              <div>

                <p className="text-gray-500">
                  Posted
                </p>

                <h3 className="text-xl font-semibold">
                  {new Date(task.createdAt).toLocaleDateString()}
                </h3>

              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
    );
};

export default TaskDetails;