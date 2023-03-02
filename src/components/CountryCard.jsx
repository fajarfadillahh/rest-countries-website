import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="w-max cursor-pointer overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="overflow-hidden">
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="h-[180px] w-[280px] object-cover object-center"
        />
      </div>

      <div className="bg-white p-8 transition-all duration-300 dark:bg-gray-700">
        <h3 className="section-title pb-4 text-[18px] dark:text-white">
          {country.name}
        </h3>

        <ul className="flex flex-col gap-1 text-[14px]">
          <li className="flex items-center gap-1 font-semibold text-gray-900 dark:text-white">
            Population:
            <span className="font-light text-gray-700 dark:text-gray-500">
              {country.population.toLocaleString()}
            </span>
          </li>
          <li className="flex items-center gap-1 font-semibold text-gray-900 dark:text-white">
            Region:
            <span className="font-light text-gray-700 dark:text-gray-500">
              {country.region}
            </span>
          </li>
          <li className="flex items-center gap-1 font-semibold text-gray-900 dark:text-white">
            Capital:
            <span className="font-light text-gray-700 dark:text-gray-500">
              {country.capital}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;
