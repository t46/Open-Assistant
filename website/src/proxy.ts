import type { NextFetchEvent } from "next/server";
import { type NextRequestWithAuth, withAuth } from "next-auth/middleware";

export default function proxy(request: NextRequestWithAuth, event: NextFetchEvent) {
  return withAuth(request, event);
}

/**
 * Guards these pages and redirects them to the sign in page.
 */
export const config = {
  matcher: [
    "/create/:path*",
    "/evaluate/:path*",
    "/label/:path*",
    "/account/:path*",
    "/dashboard",
    "/admin/:path*",
    "/tasks/:path*",
    "/leaderboard",
    "/messages/:path*",
  ],
};
