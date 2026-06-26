"use client";

import { FiCreditCard } from "react-icons/fi";


const transactions = [
  {
    client: "client123@gmail.com",
    freelancer: "freelancer1@gmail.com",
    payout: "$250",
    date: "Jun 26, 2026",
    payment: "Paid",
  },
  {
    client: "john1@gmail.com",
    freelancer: "designpro@gmail.com",
    payout: "$200",
    date: "Jun 25, 2026",
    payment: "Paid",
  },
  {
    client: "rejo@mailinator.com",
    freelancer: "developer@gmail.com",
    payout: "$88",
    date: "Jun 25, 2026",
    payment: "Paid",
  },
  {
    client: "maliha.miti@gmail.com",
    freelancer: "writer@gmail.com",
    payout: "$677",
    date: "Jun 24, 2026",
    payment: "Paid",
  },
  {
    client: "client45@gmail.com",
    freelancer: "designer@gmail.com",
    payout: "$51",
    date: "Jun 23, 2026",
    payment: "Paid",
  },
];


export default function TransactionsTable(){

return (

<div className="min-h-screen bg-purple-50 p-8">
<div className="mb-6">

<h1 className="
text-3xl
font-bold
text-purple-700
">
Transactions History
</h1>


<p className="text-gray-500 mt-1">
All active Stripe payments processed
</p>

</div>



<div className="
bg-white
rounded-2xl
shadow-lg
border
border-purple-100
overflow-hidden
">
<table className="w-full">


<thead>

<tr className="
bg-purple-600
text-white
">


<th className="px-4 py-2 text-left">
Client Email
</th>

<th className="px-4 py-2 text-left">
Freelancer Email
</th>
<th className="px-4 py-2 text-left">
Payout Size
</th>
<th className="px-4 py-2 text-left">
Payment Date
</th>
<th className="px-4 py-2 text-left">
Payment
</th>
</tr>
</thead>
<tbody>


{
transactions.map((item,index)=>(


<tr
key={index}
className="
border-b
hover:bg-purple-50
transition
">


<td className="
px-4 py-2
text-gray-700
">

{item.client}

</td>




<td className="
px-4 py-2
text-gray-500
">

{item.freelancer}

</td>




<td className="
px-4 py-2
font-semibold
text-purple-700
">

{item.payout}

</td>




<td className="
px-4 py-2
text-gray-500
">

{item.date}

</td>





<td className="px-4 py-2">


<span className="
flex
items-center
gap-3

w-fit
px-3
py-1
rounded-full
bg-green-100
text-green-600
text-sm
font-medium
">

<FiCreditCard />

{item.payment}

</span>


</td>




</tr>


))

}

</tbody>
</table>
</div>

</div>
)

}