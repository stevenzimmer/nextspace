
import NavMenu from '@/components/NavMenu'
import Image from 'next/image'
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
