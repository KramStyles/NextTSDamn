"use client";

import { TbSearch, TbMicrophone } from "react-icons/tb";

export const HomeSearch = () => {
  return (
    <>
      <form className="flex w-full mt-5 mx-auto max-w-[90%] border bordder-gray-300 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl">
        <TbSearch className="text-xl text-gray-500 mr-3" />
        <input type="text" className="flex-grow focus:outline-none" />
        <TbMicrophone className="text-lg"/>
      </form>
    </>
  );
};

export default HomeSearch;
