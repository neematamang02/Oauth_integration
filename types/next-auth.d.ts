import { DefaultSession } from "next-auth";

type AppRole = "USER" | "ADMIN";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: AppRole;
    } & DefaultSession["user"];
  }
  interface User {
    role?: AppRole;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    role?: AppRole;
  }
}