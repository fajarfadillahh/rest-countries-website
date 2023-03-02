import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="w-max overflow-hidden rounded-lg shadow-sm">
      <div className="overflow-hidden">
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="h-[180px] w-[280px] object-cover object-center"
        />
      </div>

      <div className="bg-white p-8">
        <h3 className="section-title pb-4 text-[18px]">{country.name}</h3>

        <ul className="flex flex-col gap-1">
          <li className="flex items-center gap-1 font-semibold text-gray-900">
            Population:
            <span className="font-light text-gray-700">
              {country.population.toLocaleString()}
            </span>
          </li>
          <li className="flex items-center gap-1 font-semibold text-gray-900">
            Region:
            <span className="font-light text-gray-700">{country.region}</span>
          </li>
          <li className="flex items-center gap-1 font-semibold text-gray-900">
            Capital:
            <span className="font-light text-gray-700">{country.capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;
