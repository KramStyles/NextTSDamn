/*Template generated by PyCharm on Saturday (9/21/2024), 5:35 AM.
* Author: Kramstyles (USER)
* Filename: page.jsx
*/

import {Author, CommentForm, Comments, PostDetail, SideBar} from "@/components";

const Post = async ({params}) => {
    const {id} = params
    const URL = `${process.env["NEXT_PUBLIC_PACESETTER_URL"]}posts/${id}`;
    const response = await fetch(URL, {
        next: {
            tags: ["single_post"],
            revalidate: 6000,
        },
    });
    if (!response.ok)
        throw new Error(`Error fetching single post. ID: ${id}`);
    const post = await response.json();
    const yoast = post.yoast_head_json;
    const imgInfo = yoast.og_image[0];
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    <PostDetail post={post}/>
                    <Author name={yoast.author} image={imgInfo.url}/>
                    <CommentForm/>
                    <Comments/>
                </div>
                <SideBar/>
            </div>
        </div>
    );
};

export default Post