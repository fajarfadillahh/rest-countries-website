import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

// import axios & api
import axios from "axios";
import { apiURL } from "../utils/Api";

const CountrySearch = ({ setCountries }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();

    // url condition
    let url;
    if (searchQuery === "") {
      url = `${apiURL}/all`;
    } else {
      url = `${apiURL}/name/${searchQuery}`;
    }

    try {
      const response = await axios.get(url);
      setCountries(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // handle input change
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form className="flex h-[56px] max-w-lg items-center rounded-md bg-white shadow-sm transition-all duration-300 dark:bg-gray-700">
      <button
        type="submit"
        className="inline-flex h-full min-w-[80px] items-center justify-center text-[1.3rem] text-gray-600 dark:text-white"
        onClick={handleSearch}
      >
        <RiSearchLine />
      </button>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search for a country..."
        className="h-full w-full bg-transparent pr-8 font-semibold text-gray-900 outline-none placeholder:text-gray-600 dark:text-white dark:placeholder:text-white"
      />
    </form>
  );
};

export default CountrySearch;
