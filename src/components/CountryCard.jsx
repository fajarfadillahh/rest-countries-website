import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.alpha2Code.toLowerCase()}`}>
      <div className="w-max cursor-pointer overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="overflow-hidden">
          <img
            src={country.flags.svg}
            alt={`${country.name} flag`}
            className="h-[180px] w-[280px] object-cover object-center"
          />
        </div>

        <div className="bg-white p-8 transition-all duration-300 dark:bg-gray-700">
          <h3 className="section-title pb-4 text-[18px] dark:text-white">
            {country.name}
          </h3>

          <ul className="flex flex-col gap-1 text-[14px]">
            {[
              ["Population:", `${country.population.toLocaleString()}`],
              ["Region:", `${country.region}`],
              ["Capital:", `${country.capital}`],
            ].map(([title, value], index) => {
              return (
                <li key={index} className="flex items-center gap-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {title}
                  </h3>
                  <p className="font-light text-gray-700 dark:text-gray-500">
                    {value}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
