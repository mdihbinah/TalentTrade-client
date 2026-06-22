import Link from "next/link";

const RenderNavLinks = () => (
    <>
      {navItems.map((item) => {
        const isActive = pathname === item.link;
        return (
          <Link key={item.label} href={item.link} className="w-full block">
            <button
              type="button"
              className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 outline-none
                ${isActive 
                  ? "bg-purple-50 text-purple-700 font-semibold shadow-sm shadow-purple-100" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
            >
              <item.icon 
                className={`w-5 h-5 transition-colors ${isActive ? "text-purple-600" : "text-slate-400"}`} 
              />
              {item.label}
            </button>
          </Link>
        );
      })}
    </>
  );