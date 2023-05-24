import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
export default async function Dashboard() {
  // const { data: session, status } =  useSession();
  // console.log(session, status);
  const session = await getServerSession(authOptions);
  console.log({session});

  if(!session) {
    redirect("/api/auth/signin");
  }

  return (
    <>
    <div>
      
      Name: {session?.user.name}
    </div> <div>

      Email: {session?.user.email}
    </div>
    </>
  )
}