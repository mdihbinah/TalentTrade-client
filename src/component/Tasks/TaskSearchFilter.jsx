'use client'

const categories = [
    "Design",
    "Development",
    "Writing",
    "Marketing",
    "Other",
];
const TaskSearchFilter = ({ setTasks }) => {
    const onSearch = async (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const searched = form.get("search");
        const type = form.get("categories");
        console.log('type', type);
        console.log('searched', searched);
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/tasks?search=${searched}&category=${type}`);
        const data = await res.json();
        


        setTasks(data);
        console.log('t', data);

    }

    return (
        <div className='my-5 md:flex justify-around gap-5'>
            <form onChange={onSearch} className='flex flex-col md:flex-row justify-center items-center gap-8'>

                <div className="relative w-full sm:flex-grow">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-zinc-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        name='search'
                        placeholder="Search tasks..."
                        className="w-full bg-white text-zinc-800 placeholder:text-zinc-400 border border-zinc-100/80 focus:border-purple-600 rounded-full h-11 pl-11 pr-4 text-sm shadow-xs transition-all"
                    />
                </div>


                <div className="flex gap-2 w-full sm:w-auto shrink-0">

                    <div className="relative w-full sm:w-32">
                        <select
                            name='categories'
                            className="w-full bg-white border border-zinc-200 focus:border-purple-600 rounded-full h-11 px-4 pr-8 text-xs font-medium cursor-pointer appearance-none shadow-xs transition-all"
                        >
                            <option value="all">All</option>
                            {categories.map(c => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </span>
                    </div>

                </div>

            </form>
        </div>
    );
};

export default TaskSearchFilter;