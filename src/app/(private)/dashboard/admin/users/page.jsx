import ForToggle from "@/component/dashboard/admin/ForToggle";



export default async function UsersList() {
  const users = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users`).then(r => r.json())
  return (
    <div className="min-h-screen bg-purple-50 p-8">

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-purple-700">
          Users Management
        </h1>
        <p className="text-gray-500">
          Manage all users from admin dashboard
        </p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-purple-100">
        <table className="w-full">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="text-left px-6 py-4">User</th>
              <th className="text-left px-6 py-4">Role</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-left px-6 py-4">Joined</th>
              <th className="text-right px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user,index)=>(
            <tr 
              key={user._id}
              className="border-b hover:bg-purple-50 transition"
            >
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="
                    w-11 h-11 rounded-full
                    bg-purple-100
                    text-purple-700
                    flex items-center justify-center
                    font-bold
                  ">
                    {user.name.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {user.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {user.email}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="
                  px-3 py-1
                  rounded-full
                  border
                  border-purple-300
                  text-purple-700
                  text-sm
                ">
                  {user.role}
                </span>

              </td>
              <td className="px-6 py-4">

                <span className="
                  px-3 py-1
                  rounded-full
                  bg-green-100
                  text-green-600
                  text-sm
                  font-medium
                ">
                  {user.isBlocked ? 'Blocked' : 'Active'}
                </span>

              </td>
              <td className="px-6 py-4 text-gray-500">
                {user.joined}
              </td>

              <td className="px-6 py-4 text-right">
                <ForToggle user={user}></ForToggle>
              </td>
            </tr>
          ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}