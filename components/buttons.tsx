"use client";

import { useSession, signIn, signOut } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
  const { data: session, status } =  useSession();
  console.log(session, status);

  if(status === "loading") {
    return <>...</>
  }

  if(status === "authenticated") {
    return (
      <Link href={`/dashboard`}>
        <Image 
          src={session.user?.image ?? "/mememan.webp"}
          width={32}
          height={32}
          alt={`${session.user?.name} profile image`}
          className="rounded-full mx-3"
        />
      </Link>
    )
  }
  return <button className="py-1 px-4 bg-white text-blue-500" onClick={() => signIn()}>
    Sign In
  </button>
}

export function SignOutButton() {
  return <button className="py-1 px-4 bg-white text-red-500" onClick={() => signOut()}>Sign out</button>
}