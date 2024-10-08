/*Template generated by google-clone on Wednesday (9/11/2024), 4:31 AM.
 * Author: Kramstyles (USER)
 * Filename: app/search/web/page.tsx
 */

import Link from "next/link";
import WebSearchResult, { ResultProps } from "@/components/WebSearchResult";
import PaginationButtons from "@/components/PaginationButtons";

const API_KEY = process.env["NEXT_PUBLIC_GOOGLE_API_KEY"];
const CONTEXT_KEY = process.env["NEXT_PUBLIC_GOOGLE_CONTEXT_KEY"];

interface searchParamsProps {
  searchParams: { searchTerm: string; start: string };
}

const page = async ({
  searchParams: { searchTerm, start },
}: searchParamsProps) => {
  const startIndex = start || "1";
  const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}&start=${startIndex}`;
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(url);
  // If an error occurs during fetch.
  if (!response.ok) throw new Error("Something went wrong");
  const data = await response.json();
  const results = data.items;

  // If search item is empty
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found for {searchTerm}</h1>
        <p className="text-lg">
          Please, try searching for something else.{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto px-3 sm:pb-24 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm my-5">
        About {data.searchInformation?.formattedTotalResults} results (
        {data.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results &&
        results.map((result: ResultProps) => (
          <WebSearchResult key={result.link} result={result} />
        ))}
      <PaginationButtons />
    </div>
  );
};

export default page;
