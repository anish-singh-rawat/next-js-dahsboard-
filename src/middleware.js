import { NextResponse } from 'next/server'
export function middleware(request) {
  // const url = request.nextUrl.clone();
  // const islogin = request.cookies.get('logged');
  // if ((!islogin)) {
  //   if (request.nextUrl.pathname.startsWith('/dashboard')) {
  //     return NextResponse.rewrite(new URL('/', request.url))
  //   }
  //   if (request.nextUrl.pathname.startsWith('/userDashboard')) {
  //     return NextResponse.rewrite(new URL('/', request.url))
  //   }
  // }
  // else if(islogin){
  //   if(url.pathname === '/'){
  //     return NextResponse.redirect(new URL('/dashboard', request.url))
  //   }
  //   else if (url.pathname === '/signup'){
  //     return NextResponse.rewrite(new URL('/dashboard', request.url))
  //   }
  //   else if (url.pathname === '/login'){
  //     return NextResponse.rewrite(new URL('/dashboard', request.url))
  //   }
  // }
}   