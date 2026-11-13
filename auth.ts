import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [ Google ],
    session: { strategy: "jwt" },
    pages: {
        signIn: "/",
    },
    callbacks: {
        async signIn({ account, profile }) {
            if(account?.provider === "google") {
                return !!profile?.email_verified;
            }
            return true;
        },

        async session({ session, token }) {
      if (token.sub) session.user.id = token.sub;
      return session;
    },
    },
});