import { auth } from "@/auth";
import { SignOutButton } from "@/components/auth-buttons";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";
async function UserCard() {
  const session = await auth();
  if (!session?.user) redirect("/");

  const { name, email, image, id, role } = session.user;

  return (
    <>
      {image && (
        <Image
          src={image}
          alt={name ?? "Profile picture"}
          width={80}
          height={80}
          loading="eager"
          className="rounded-full"
        />
      )}
      <h1 className="text-2xl font-semibold">Hello, {name}</h1>
      <p className="text-neutral-500">{email}</p>
      <p className="text-xs text-neutral-400">User ID: {id}</p>
      <p className="text-xs text-neutral-400">Role: {role}</p>
      <SignOutButton />
    </>
  );
}

export default async function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Suspense fallback={<p className="text-neutral-500">Loading...</p>}>
        <UserCard />
      </Suspense>
    </main>
  );
}