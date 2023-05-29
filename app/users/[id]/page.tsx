import FollowButton from "@/components/FollowButton/FollowButton";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import Image from "next/image";

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id
    }
  });

  return  {
    title: `User Profile of ${user?.name} | NextSpace`
  }

}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id
    }
  });
  console.log({user});
  return (
    <div>
      <div>
    <Image src={user.image} alt={user.name} width={200} height={200} className="rounded-full " />
      </div>
      <div>
        {user.email}
      </div>
      <div>
        {user.name}
      </div>
      <div>
        {user.bio}
      </div>
      <div>
        {user?.age}
      </div>
      {/* @ts-expect-error Server Component */}
      <FollowButton targetUserId={params.id} />
    </div>
  )
}