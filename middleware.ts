import NextAuth, { Session } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async authorized({
      auth,
      request,
    }: {
      auth: Session | null;
      request: NextRequest;
    }) {
      const user = auth?.user;
      const chatpathname = request.nextUrl.pathname.startsWith("/chat");
      const authpage =
        request.nextUrl.pathname.startsWith("/login") ||
        request.nextUrl.pathname.startsWith("/signin");

      if (!user && !chatpathname) {
        return false;
      }
      if (user && authpage) {
        return NextResponse.redirect(new URL("/chat", request.nextUrl));
      }
      return true;
    },
  },
};


export default NextAuth(authConfig).auth;