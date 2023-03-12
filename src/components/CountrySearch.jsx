import React from "react";
import { RiSearchLine } from "react-icons/ri";

const CountrySearch = ({ setCountry }) => {
  return (
    <form className="flex h-[56px] max-w-lg items-center rounded-md bg-white shadow-sm transition-all duration-300 dark:bg-gray-700">
      <div className="inline-flex h-full min-w-[80px] items-center justify-center text-[1.3rem] text-gray-600 dark:text-white">
        <RiSearchLine />
      </div>
      <input
        type="text"
        onChange={setCountry}
        placeholder="Search for a country..."
        className="h-full w-full bg-transparent pr-8 font-semibold text-gray-900 outline-none placeholder:text-gray-600 dark:text-white dark:placeholder:text-white"
      />
    </form>
  );
};

export default CountrySearch;
