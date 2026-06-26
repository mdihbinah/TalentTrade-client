export default function OverviewCard({

title,
value,
icon,
sub

}){

return(

<div className="bg-white rounded-3xl border border-purple-100 p-6 shadow-sm">

<div className="flex justify-between">

<div>

<p className="text-gray-500">

{title}

</p>

<h2 className="text-5xl font-bold mt-3">

{value}

</h2>

<p className="text-sm text-gray-400 mt-2">

{sub}

</p>

</div>

<div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl text-purple-600">

{icon}

</div>

</div>

</div>

)

}