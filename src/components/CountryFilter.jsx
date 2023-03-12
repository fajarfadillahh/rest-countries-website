import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiArrowDownSLine } from "react-icons/ri";

// region list
const continents = [
  { name: "All" },
  { name: "Africa" },
  { name: "Americas" },
  { name: "Asia" },
  { name: "Europe" },
  { name: "Oceania" },
];

const CountryFilter = () => {
  const [selectedContinent, setSelectedContinent] = useState("All");

  return (
    <Menu as="div" className="relative z-10 w-max lg:justify-self-end">
      <Menu.Button className="inline-flex h-[56px] w-[210px] items-center justify-between rounded-md bg-white px-6 font-semibold text-gray-900 shadow-sm transition-all duration-300 dark:bg-gray-700 dark:text-white">
        {selectedContinent === "All" ? "Filter by region" : selectedContinent}
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
          {continents.map((continent, index) => {
            return (
              <Menu.Item
                as="li"
                key={index}
                onClick={() => setSelectedContinent(continent.name)}
                className="cursor-pointer font-semibold text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-500"
              >
                {continent.name}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default CountryFilter;
