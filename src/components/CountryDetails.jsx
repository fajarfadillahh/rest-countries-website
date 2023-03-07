import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";

// import api
import { getCountryByCode } from "../Api";

// import image
import Flag from "../assets/images/flag-be.svg";

const CountryDetails = () => {
  const { countryCode } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    getCountryByCode(countryCode)
      .then((result) => {
        setCountry(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log({ detail: country });

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
          <div className="max-h-[260px] max-w-[600px] overflow-hidden sm:max-h-[320px] lg:max-h-[450px]">
            <img
              src={Flag}
              alt="flag image"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="grid gap-6">
            <h3 className="section-title text-[26px] dark:text-white lg:text-[32px]">
              Belgium
            </h3>

            <div className="flex flex-col gap-10 sm:flex-row sm:items-start lg:gap-28">
              <ul className="grid gap-3">
                {[
                  ["Native Name:", "Bergie"],
                  ["Population:", "11,319,198"],
                  ["Region:", "Euro"],
                  ["Sub Region:", "Wester Euro"],
                  ["Capital:", "Brussel"],
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
                  ["Top Level Domain:", ".be"],
                  ["Currencies:", "Euro"],
                  ["Languages:", "Dutch, French, German"],
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
                <li className="inline-flex w-[130px] justify-center rounded-md bg-white py-2 px-6 text-[14px] text-gray-800 shadow-sm transition-all duration-300 dark:bg-gray-700 dark:text-white">
                  French
                </li>
                <li className="inline-flex w-[130px] justify-center rounded-md bg-white py-2 px-6 text-[14px] text-gray-800 shadow-sm transition-all duration-300 dark:bg-gray-700 dark:text-white">
                  Germany
                </li>
                <li className="inline-flex w-[130px] justify-center rounded-md bg-white py-2 px-6 text-[14px] text-gray-800 shadow-sm transition-all duration-300 dark:bg-gray-700 dark:text-white">
                  Netherlands
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
