import { auth } from "@/auth";
import { SignInButton } from "@/components/auth-buttons";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";


async function SignInOrRedirect() {
  const session = await auth();
  if (session) redirect("/dashboard");
  return <SignInButton />;
}

export default function Home() {  
  return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold">Welcome</h1>
      <p className="text-neutral-500">Sign in to continue</p>

      <Suspense fallback={<div className="h-10" />}>
        <SignInOrRedirect />
      </Suspense>
    </main>
  );
}
