import { PostCard, Categories, PostWidget } from "@/components";

export default function Home() {
  const posts = [
    { title: "React Testing", excerpt: "Learn React Testing" },
    {
      title: "React with Tailwind",
      excerpt: "Learn React Testing with Tailwind",
    },
  ];
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8 ">
          {posts.map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
