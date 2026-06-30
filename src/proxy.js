// import dns from "node:dns"
// dns.setServers(['8.8.8.8', '8.8.4.4'])

import { NextResponse } from "next/server"
import { headers } from "next/headers"
import { auth } from "./app/lib/auth"



export async function proxy(request) {
    console.log('request', request)
    
    const session = await auth.api.getSession({
        headers: await headers()
    })

  if(session){
    return NextResponse.next()
  }
  return NextResponse.redirect(new URL('/signin', request.url))
}

export const config = {
  matcher: ['/task/:id',],
}