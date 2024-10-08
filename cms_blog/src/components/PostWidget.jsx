/*Template generated by PyCharm on Thursday (9/19/2024), 4:58 AM.
 * Author: Kramstyles (USER)
 * Filename: PostWidget.jsx
 */

import Image from "next/image";
import Parser from "html-react-parser";
import moment from "moment";
import Link from "next/link";

const URL = process.env["NEXT_PUBLIC_PACESETTER_URL"] + "posts?per_page=3";

const PostWidget = async ({ category }) => {
  let url = URL;
  // Get related posts
  if (category) url = url + `&categories=${category}`;
  const response = await fetch(url, {
    next: {
      tags: ["posts"],
      revalidate: 6000,
    },
  });
  if (!response.ok) throw new Error("Something spoilt during post fetch.");
  const posts = await response.json();
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {category ? "Related Posts" : "Recent Posts"}
      </h3>
      {posts.map((post) => {
        const yoast = post.yoast_head_json;
        const imgInfo = yoast.og_image[0];
        return (
          <div className="flex items-center w-full mb-4" key={post.id}>
            <div className="w-16 flex-none">
              <Image
                src={imgInfo.url}
                alt={post.title.rendered}
                priority
                width={imgInfo.width}
                height={imgInfo.height}
                className="align-middle rounded-full"
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-500 font-xs">
                {moment(post.date).format("MMM DD, YYYY")}
              </p>
              <p className="leading-[0.3rem]">
                <Link href={`/post/${post.id}`} className="text-xs">
                {Parser(post.title.rendered)}
              </Link>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostWidget;
