export const revalidate = 1200; // not necessary, just for ISR demonstration


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

export async function generateStaticParams() {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then((res) => res.json());

  return posts.map((post) => ({
    slug: post.slug
  }));

}

export default async function BlogPostPage({ params } : Props) {
  // Deduped 
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then((res) => res.json());


  const post = posts.find((post) => post.slug === params.slug)!; // Non-null assertion operator (typescript)


  console.log({post});
  return (
    <div>
      <h1 className="text-[32px] font-bold">
        {post.title}
      </h1>
      <p>
        {post.content}
      </p>
    </div>
  )
}