import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";

// import axios & api
import axios from "axios";
import { apiURL } from "../utils/Api";

const CountryDetails = () => {
  const [country, setCountry] = useState([]);
  const { countryCode } = useParams();

  useEffect(() => {
    window.scroll(0, 0);

    // get country by code
    const getCountryByCode = async () => {
      try {
        const response = await axios.get(`${apiURL}/alpha/${countryCode}`);
        setCountry(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCountryByCode();
  }, [countryCode]);

  return (
    <section className="section pt-32">
      <div className="container grid gap-16">
        <Link
          to="/"
          className="inline-flex h-[48px] w-max items-center gap-4 rounded-md bg-white py-4 px-8 font-semibold text-gray-900 shadow-sm transition-all duration-300 dark:bg-gray-700 dark:text-white"
        >
          <RiArrowLeftLine size="1.3rem" />
          Back
        </Link>

        <div className="grid gap-12 sm:mx-auto sm:max-w-2xl sm:justify-center lg:max-w-full lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="h-[270px] max-w-[580px] overflow-hidden rounded-md sm:h-[320px] lg:h-[430px] xl:w-[580px]">
            <img
              src={country.flag}
              alt="image flag"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="grid gap-6">
            <h3 className="section-title text-[26px] dark:text-white lg:text-[32px]">
              {country.name}
            </h3>

            <div className="flex flex-col gap-10 sm:flex-row sm:items-start lg:gap-20">
              <ul className="grid gap-3">
                {[
                  ["Native Name:", `${country.nativeName}`],
                  [
                    "Population:",
                    new Intl.NumberFormat().format(country.population),
                  ],
                  ["Region:", `${country.region}`],
                  ["Sub Region:", `${country.subregion}`],
                  ["Capital:", `${country.capital}`],
                ].map(([title, value], index) => {
                  return (
                    <li key={index} className="inline-flex items-center gap-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {title}
                      </h3>
                      <p className="text-gray-800 dark:text-white">{value}</p>
                    </li>
                  );
                })}
              </ul>

              <ul className="grid gap-3">
                {[
                  ["Top Level Domain:", `${country.topLevelDomain}`],
                  [
                    "Currencies:",
                    `${
                      country.currencies
                        ? country.currencies[0]?.name
                        : "Unknown"
                    }`,
                  ],
                  [
                    "Languages:",
                    `${
                      country.languages
                        ? country.languages
                            .map((language) => language.name)
                            .join(", ")
                        : "Unknown"
                    }`,
                  ],
                ].map(([title, value], index) => {
                  return (
                    <li key={index} className="inline-flex items-center gap-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {title}
                      </h3>
                      <p className="text-gray-800 dark:text-white">{value}</p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="section-title mb-3 text-[20px] dark:text-white">
                Border Countries:
              </h3>

              <ul className="flex flex-wrap items-center gap-4">
                {country.borders ? (
                  country.borders?.map((border, index) => {
                    return (
                      <li
                        key={index}
                        className="inline-flex w-[70px] justify-center rounded-md bg-white py-2 text-[14px] text-gray-800 shadow-sm transition-all duration-300 dark:bg-gray-700 dark:text-white"
                      >
                        {border}
                      </li>
                    );
                  })
                ) : (
                  <p className="inline-flex rounded-md bg-white py-2 px-6 text-[14px] text-gray-800 shadow-sm transition-all duration-300 dark:bg-gray-700 dark:text-white">
                    No Borders...
                  </p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
