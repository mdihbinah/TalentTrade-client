'use client';

import {

PieChart,
Pie,
Cell,
Tooltip,
Legend,
ResponsiveContainer

} from 'recharts';

const COLORS=[
'#7C3AED',
'#A855F7',
'#C084FC'
];

export default function UsersPieChart({

admins,
clients,
freelancers

}){

const data=[

{
name:'Admin',
value:admins
},

{
name:'Client',
value:clients
},

{
name:'Freelancer',
value:freelancers
}

];

return(

<div className="bg-white rounded-3xl border border-purple-100 p-6">

<h2 className="text-2xl font-semibold mb-6">

Users by Role

</h2>

<div className="h-[350px]">

<ResponsiveContainer>

<PieChart>

<Pie

data={data}

innerRadius={80}

outerRadius={120}

paddingAngle={3}

dataKey="value"

>

{

data.map((entry,index)=>(

<Cell

key={index}

fill={COLORS[index]}

/>

))

}

</Pie>

<Tooltip/>

<Legend/>

</PieChart>

</ResponsiveContainer>

</div>

</div>

)

}