/*Template generated by PyCharm on Thursday (9/19/2024), 4:57 AM.
 * Author: Kramstyles (USER)
 * Filename: Categories.jsx
 */

import Link from "next/link";

const URL =
  process.env["NEXT_PUBLIC_PACESETTER_URL"] +
  "categories?_fields=id,name&per_page=50";

const Categories = async () => {
  const response = await fetch(URL, {
    next: {
      tags: ["posts"],
      revalidate: 6000,
    },
  });
  if (!response.ok)
    throw new Error(`Something went wrong while fetching Categories. ${URL}`);
  const categories = await response.json();
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((item) => (
        <Link href={`category/${item.id}`} key={item.id} className="cursor-pointer block py-1 hover:text-red-600 transition duration-300">
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
