import NextAuth from "next-auth";
import github from "next-auth/providers/github";
import connectDB from "./lib/DB";
import { User } from "./models/user.model";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    github({
      clientId: "Ov23liZmRrOjOlA90tFe",
      clientSecret: "60d012eb696951ffc2e6763a9c5e59b5a5b855f4",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "github") {
        await connectDB();
        try {
          const existingUser = await User.findOne({ email: profile?.email });
          if (!existingUser) {
            const newUser = await User.create({
              username: profile?.login,
              fullname: profile?.name,
              email: profile?.email,
              profilephoto: profile?.avatar_url,
            });
            await newUser.save();
          }
          return true;
        } catch (error) {
          console.error("Error signing in:", error);
          throw error;
        }
      }
      return false;
    },
  },
});
