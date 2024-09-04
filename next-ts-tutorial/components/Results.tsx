/*Template generated by NextTSDamn on Sunday (9/1/2024), 10:09 AM.
 * Author: Kramstyles (USER)
 * Filename: next-ts-tutorial/components/Results.tsx
 */

import Link from "next/link";
import Image from "next/image";
import { AiFillLike } from "react-icons/ai";

export interface ResultProps {
  backdrop_path?: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path?: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  tagline: string;
  budget: number;
}

const Results = ({ result }: { result: ResultProps }) => {
  const url = "https://image.tmdb.org/t/p/original";
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`${url}${result.backdrop_path || result.poster_path}`}
          alt={`Official movie poster for ${result.title}`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-50 transition-opacity duration-300"
        />
      </Link>
      <div className="p-2">
        <p className="line-clamp-2 text-md my-3">{result.overview}</p>
        <h2 className="text-lg font-bold truncate text-amber-600">
          {result.title || result.original_title || "No Title"}
        </h2>
        <p className="flex gap-3 items-center">
          {result.release_date} <AiFillLike /> {result.vote_count} (
          {result.vote_average})
        </p>
      </div>
    </div>
  );
};

export default Results;
