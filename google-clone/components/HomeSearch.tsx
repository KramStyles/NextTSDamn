"use client";

import { TbSearch, TbMicrophone } from "react-icons/tb";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const HomeSearch = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  // Included this function for a separate event type
  const buttonSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async () => {
    setLoading(true);
    const url = "https://random-word-api.herokuapp.com/word";
    const response = await fetch(url)
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setLoading(false);
  };

  return (
    <>
      <form
        className="flex w-full mt-5 mx-auto max-w-[90%] border bordder-gray-300 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
        onSubmit={handleSubmit}
      >
        <TbSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <TbMicrophone className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
        <button
          className="bg-gray-100 rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-red-500 hover:shadow-md w-36 h-10 transition-shadow"
          onClick={buttonSubmit}
        >
          Google Search
        </button>
        <button
          disabled={loading}
          onClick={randomSearch}
          className="bg-gray-100 rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-red-500 hover:shadow-md w-36 h-10 transition-shadow flex justify-center items-center disabled:opacity-80 disabled:cursor-not-allowed"
        >
          {loading ? (
            <img
              src="/loading_symbol.svg"
              alt="Loading"
              height={50}
              width={50}
              className="text-center"
            />
          ) : (
            "I am Feeling lucky!"
          )}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
