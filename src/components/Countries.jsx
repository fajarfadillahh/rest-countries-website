import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiSearchLine, RiArrowDownSLine } from "react-icons/ri";

// import axios &  api
import axios from "axios";
import { apiURL } from "../utils/Api";

// import components
import CountryCard from "./CountryCard";

// region list
const regionList = [
  { name: "None" },
  { name: "Africa" },
  { name: "America" },
  { name: "Asia" },
  { name: "Europe" },
  { name: "Oceania" },
];

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState("None");

  // get all country
  const getAllCountries = async () => {
    try {
      const response = await axios.get(`${apiURL}/all`);
      setCountries(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let mounted = true;
    getAllCountries().then((result) => {
      if (mounted) {
        getAllCountries(result);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <section className="section pt-32">
      <div className="container grid gap-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <form className="flex h-[56px] max-w-lg items-center rounded-md bg-white shadow-sm transition-all duration-300 dark:bg-gray-700">
            <button
              type="submit"
              className="inline-flex h-full min-w-[80px] items-center justify-center text-[1.3rem] text-gray-600 dark:text-white"
              onClick={(e) => e.preventDefault()}
            >
              <RiSearchLine />
            </button>
            <input
              type="text"
              placeholder="Search for a country..."
              className="h-full w-full bg-transparent pr-8 font-semibold text-gray-900 outline-none placeholder:text-gray-600 dark:text-white dark:placeholder:text-white"
            />
          </form>

          <Menu as="div" className="relative z-10 w-max lg:justify-self-end">
            <Menu.Button className="inline-flex h-[56px] w-[210px] items-center justify-between rounded-md bg-white px-6 font-semibold text-gray-900 shadow-sm transition-all duration-300 dark:bg-gray-700 dark:text-white">
              {regions === "None" ? "Filter by region" : regions}
              <RiArrowDownSLine size="1.3rem" />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-in duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                as="ul"
                className="absolute mt-2 flex w-full flex-col gap-1 rounded-md bg-white py-4 px-6 shadow-sm dark:bg-gray-700"
              >
                {regionList.map((region, index) => {
                  return (
                    <Menu.Item
                      as="li"
                      key={index}
                      onClick={() => setRegions(region.name)}
                      className="cursor-pointer font-semibold text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-500"
                    >
                      {region.name}
                    </Menu.Item>
                  );
                })}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="grid gap-12 justify-self-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {countries?.slice(0, 36).map((country) => {
            return <CountryCard key={country.alpha2Code} country={country} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Countries;
