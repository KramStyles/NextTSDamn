import React from "react";

const API_KEY = process.env["REACT_APP_API_KEY"];
const API_URL = process.env["REACT_APP_MOVIE_API"];

import { ResultProps } from "@/components/Results";
import {
  AiOutlineDollar,
  AiOutlineCalendar,
  AiOutlineEdit,
  AiOutlineNumber,
  AiOutlineBarChart,
} from "react-icons/ai";
import Image from "next/image";

interface ParamsProp {
  id: number;
}

export default async function Page({ params }: { params: ParamsProp }) {
  const movieID = params.id;
  const url = `${API_URL}/movie/${movieID}?api_key=${API_KEY}`;
  // Request movie information.
  const response = await fetch(url);
  const data: ResultProps = await response.json();
  const imageUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`${imageUrl}${data.backdrop_path || data.poster_path}`}
          alt={`Official movie poster for ${data.title}`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{ height: "100%", maxWidth: "100%" }}
        />
        <div>
          <h2 className="font-bold text-lg text-amber-600 dark:text-amber-400">
            {data.title || data.original_title || "No Title!"}
          </h2>
          <p className="text-lg my-3">{data.overview}</p>
          <p className="flex items-center gap-1">
            <AiOutlineEdit /> <span className="font-semibold text-amber-600 dark:text-amber-400">Tagline: </span>
            {data.tagline}
          </p>
          <p className="flex items-center gap-1">
            <AiOutlineDollar /> <span className="font-semibold text-amber-600 dark:text-amber-400">Budget: </span>
            {data.budget}
          </p>
          <p className="flex items-center gap-1">
            <AiOutlineCalendar />
            <span className="font-semibold text-amber-600 dark:text-amber-400">Date Released: </span>
            {data.release_date}
          </p>
          <p className="flex items-center gap-1">
            <AiOutlineNumber />
            <span className="font-semibold text-amber-600 dark:text-amber-400">Vote Count: </span>
            {data.vote_count}
          </p>
          <p className="flex items-center gap-1">
            <AiOutlineBarChart />
            <span className="font-semibold text-amber-600 dark:text-amber-400">Rating: </span>
            {data.vote_average}
          </p>
        </div>
      </div>
    </div>
  );
}
