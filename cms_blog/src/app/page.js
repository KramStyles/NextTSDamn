import { Categories, PostCard, PostWidget } from "@/components";

const URL = process.env["NEXT_PUBLIC_PACESETTER_URL"];

export default async function Home() {
  const response = await fetch(`${URL}posts`);
  if (!response.ok) throw new Error("Something spoilt during post fetch.");
  const data = await response.json();
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8 ">
          {data.map((post) => (
            <PostCard post={post} key={post.id} />
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
