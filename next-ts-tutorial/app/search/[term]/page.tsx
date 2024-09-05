const API_KEY = process.env["REACT_APP_API_KEY"];
const API_URL = process.env["REACT_APP_MOVIE_API"];

import Results, { ResultProps } from "@/components/Results";
import {
  AiOutlineDollar,
  AiOutlineCalendar,
  AiOutlineEdit,
  AiOutlineNumber,
  AiOutlineBarChart,
} from "react-icons/ai";
import Image from "next/image";

interface ParamsProp {
  term: string;
}
interface DataProp {
  success: boolean;
  page: number;
  results: [ResultProps];
}

export default async function Page({ params }: { params: ParamsProp }) {
  const searchTerm = params.term;
  const url = `${API_URL}/search/movie?query=${searchTerm}&api_key=${API_KEY}`;
  // Request movie information.
  const response = await fetch(url);
  const data: DataProp = await response.json();
  console.log(data, "hello")

  return (
    <div className="w-full">
      {data && !data.results.length ? (
        <h1 className="text-lg max-w-6xl mx-auto font-bold text-center text-amber-500">No Results found!</h1>
      ) : (
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
          {data.results.map((result: ResultProps) => (
            <Results result={result} key={result.id} />
          ))}
        </div>
      )}
    </div>
  );
}
