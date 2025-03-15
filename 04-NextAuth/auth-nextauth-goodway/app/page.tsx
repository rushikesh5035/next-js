"use client";
import { getServerSession } from "next-auth";
import { SessionProvider, signOut, signIn, useSession } from "next-auth/react";

export default async function Home() {
  const session = await getServerSession();
  

  return <div>{JSON.stringify(session)}</div>;
}
