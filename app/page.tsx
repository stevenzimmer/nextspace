
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
interface Post {
  title: string;
  content: string;
  slug:string
}

interface Props {
  params: {
    slug: string
  };
}
export default async function Home({ params } : Props) {
  const session = await getServerSession();

  console.log({session});
  if(!session) {
    return <div className='bg-red-200 p-6 rounded-md shadow text-center font-bold text-xl'>Please sign in to get started.</div>
  }

  const posts: Post[] = await fetch('http://localhost:3000/api/content').then((res) => res.json());

  return (
    <div className="flex flex-wrap">
{posts.map((post) => {
  return (
    <div className='lg:w-1/3 mb-6'>
      <h2>{post.title}</h2>
      <Link href={`/blog/${post.slug}`}>Read more</Link>
    </div>
  )
})}
    </div>
  )
}
