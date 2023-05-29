import { prisma} from "@/lib/prisma";
import Link from "next/link";
export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <div className="flex flex-wrap">
      {users.map((user) => {
        return (
          <div className="lg:w-1/3" key={user.id}>
            
            <div>{user.name}</div>
            <div>{user.email}</div>
            <Link href={`/users/${user.id}`}>Learn more</Link>
          </div>
        )
      })}
    </div>
  )

}