import { signIn, signOut } from "@/auth";

export function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <button
        type="submit"
        className="rounded-lg bg-black px-5 py-2.5 text-white hover:bg-neutral-800"
      >
        Sign in with Google
      </button>
    </form>
  );
}

export function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button
        type="submit"
        className="rounded-lg border px-5 py-2.5 hover:bg-neutral-100 dark:hover:bg-neutral-800"
      >
        Sign out
      </button>
    </form>
  );
}