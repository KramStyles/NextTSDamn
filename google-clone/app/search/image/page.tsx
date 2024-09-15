import Link from "next/link";
import ImageSearchResult from "@/components/ImageSearchResult";
import { ResultProps } from "@/components/WebSearchResult";
import PaginationButtons from "@/components/PaginationButtons";

const API_KEY = process.env["NEXT_PUBLIC_GOOGLE_API_KEY"];
const CONTEXT_KEY = process.env["NEXT_PUBLIC_GOOGLE_CONTEXT_KEY"];

interface searchParamsProps {
  searchParams: { searchTerm: string; start: string };
}

const page = async ({ searchParams: { searchTerm, start } }: searchParamsProps) => {
    const startIndex = start || "1"
  const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}&searchType=image&start=${startIndex}`;
  await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(url);
  if (!response.ok) throw new Error("Something spoilt during image search.");
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No image results found for {searchTerm}
        </h1>
        <p className="text-lg">
          Please, try searching for another image.{" "}
          <Link href="/" className="text-red-500">
            Home
          </Link>
        </p>
      </div>
    );
  }
  return (
    <div className="w-full mx-auto px-3 sm:pb-24 pb-52">
      <p className="text-gray-600 text-sm my-5">
        About {data.searchInformation?.formattedTotalResults} results (
        {data.searchInformation?.formattedSearchTime} seconds)
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results &&
          results.map((result: ResultProps) => (
            <ImageSearchResult key={result.link} result={result} />
          ))}
      </div>

        <div className="ml-[5%]">
            <PaginationButtons />
        </div>
    </div>
  );
};

export default page;
