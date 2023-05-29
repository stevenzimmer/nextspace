
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ProfileForm } from "./ProfileForm";
export default async function Dashboard() {

  const session = await getServerSession(authOptions);
  console.log({session});

  if(!session) {
    redirect("/api/auth/signin");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email
    }
  });

  // console.log({user});

  return (
    <>
    <div>
      <h1>
        Dashboards
      </h1>
    </div>
    <div>
      <ProfileForm user={user} />
    </div>
{/*  */}
    </>
  )
}