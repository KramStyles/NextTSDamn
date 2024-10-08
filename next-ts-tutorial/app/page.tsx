// Get constants from environmental variables.
import React from "react";
import Results, { ResultProps } from "@/components/Results";

const API_KEY = process.env["REACT_APP_API_KEY"];
const API_URL = process.env["REACT_APP_MOVIE_API"];

interface HomeComponentProps {
  searchParams: string;
}

// export default function UserLayout({children}: { children: React.ReactNode}) {
export default async function HomeComponent({
  searchParams,
}: {
  searchParams: any;
}) {
  const param = searchParams.genre || "trending";
  const genre = `${param === "trending" ? "/trending/all/week" : "/movie/top_rated"}`;
  const url = `${API_URL}${genre}?api_key=${API_KEY}&language=en-US&page=1`;
  console.log(url);
  const response = await fetch(url, {
      next: {
          revalidate: 86400, // Caches and removes cache after 1 day.
      }
  })
  // const response = await new Promise<Response>((resolve) => {
  //   setTimeout(async () => {
  //     const response1 = await fetch(url, {
  //       next: {
  //         revalidate: 86400, // Caches and removes cache after 1 day.
  //       },
  //     });
  //     resolve(response1);
  //   }, 2000);
  // });

  const data = await response.json();
  const msg = `Failed to fetch data. ${response.statusText}`;
  if (!response.ok) throw new Error(msg);

  const results = data.results;
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((result: ResultProps) => (
        <Results result={result} key={result.id} />
      ))}
    </div>
  );
}
