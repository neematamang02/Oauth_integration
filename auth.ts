import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { prisma } from "./lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [ Google ],
    session: { strategy: "jwt" },
    pages: {
        signIn: "/",
    },
    callbacks: 
    {
        authorized({ auth }) {
      return !!auth;
    },
        async signIn({ account, profile }) {
            if(account?.provider === "google") {
                return !!profile?.email_verified;
            }
            return true;
        },

            async jwt({ token, user }) {
      // `user` is the database user, only present at sign-in
      if (user) token.role = user.role;
      return token;
    },

        async session({ session, token }) {
      if (token.sub) session.user.id = token.sub;
      return session;
    },
    },
});