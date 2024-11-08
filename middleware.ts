// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  if (url.pathname.startsWith("/assets")) {
    // Set a long cache lifetime for assets like videos and images
    const response = NextResponse.next();
    response.headers.set(
      "Cache-Control",
      "public, max-age=31536000, immutable"
    );
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/assets/:path*",
};
