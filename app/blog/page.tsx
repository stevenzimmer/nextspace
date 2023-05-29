
import { getServerSession } from 'next-auth';
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
export default async function BlogHome({ params } : Props) {


  const posts: Post[] = await fetch('http://localhost:3000/api/content').then((res) => res.json());

  return (
    <>
    <h1 className='text-[32px] font-bold mb-6'>Recent Blog Posts</h1>
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
    </>
  )
}
