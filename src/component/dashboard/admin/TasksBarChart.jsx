'use client';

import{

BarChart,
Bar,
CartesianGrid,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer

}from'recharts';

export default function TasksBarChart({

open,
progress,
completed

}){

const data=[

{
status:'Open',
tasks:open
},

{
status:'In Progress',
tasks:progress
},

{
status:'Completed',
tasks:completed
}

];

return(

<div className="bg-white rounded-3xl border border-purple-100 p-6">

<h2 className="text-2xl font-semibold mb-6">

Tasks by Status

</h2>

<div className="h-[350px]">

<ResponsiveContainer>

<BarChart data={data}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="status"/>

<YAxis/>

<Tooltip/>

<Bar

dataKey="tasks"

radius={[10,10,0,0]}

fill="#7C3AED"

/>

</BarChart>

</ResponsiveContainer>

</div>

</div>

)

}