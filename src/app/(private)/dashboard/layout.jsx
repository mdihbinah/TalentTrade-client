import DashboardSidebar from "@/component/dashboard/DasboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen max-w-[95%] bg-background">
      <div className="flex flex-1 overflow-hidden">
        {/* sidebar */}
      <DashboardSidebar/>

        <div className="flex-1 overflow-y-auto">
          <main className="p-5">
            {children}</main>
        </div>
      </div>
    </div>
  );
}