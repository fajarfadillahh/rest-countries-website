import React from "react";
import { Link } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";

// import image
import Flag from "../assets/images/flag-be.svg";

const CountryDetails = () => {
  return (
    <section className="section pt-32">
      <div className="container grid gap-16">
        <Link
          to="/"
          className="inline-flex h-[48px] w-max items-center gap-4 rounded-md bg-white py-4 px-8 font-semibold text-gray-900 shadow-sm"
        >
          <RiArrowLeftLine size="1.3rem" />
          Back
        </Link>

        <div className="grid gap-12">
          <div className="max-h-[260px] max-w-[600px] overflow-hidden">
            <img
              src={Flag}
              alt="flag image"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="grid gap-6">
            <h3 className="section-title text-[26px]">Belgium</h3>

            <div className="flex flex-col gap-10">
              <ul className="grid gap-[6px]">
                {[
                  ["Native Name:", "Bergie"],
                  ["Population:", "11,319,198"],
                  ["Region:", "Euro"],
                  ["Sub Region:", "Wester Euro"],
                  ["Capital:", "Brussel"],
                ].map(([title, value], index) => {
                  return (
                    <li key={index} className="inline-flex items-center gap-1">
                      <h3 className="font-semibold text-gray-900">{title}</h3>
                      <p className="text-gray-800">{value}</p>
                    </li>
                  );
                })}
              </ul>

              <ul className="grid gap-[6px]">
                {[
                  ["Top Level Domain:", ".be"],
                  ["Currencies:", "Euro"],
                  ["Languages:", "Dutch, French, German"],
                ].map(([title, value], index) => {
                  return (
                    <li key={index} className="inline-flex items-center gap-1">
                      <h3 className="font-semibold text-gray-900">{title}</h3>
                      <p className="text-gray-800">{value}</p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="section-title mb-3 text-[20px]">
                Border Countries:
              </h3>
              <ul className="flex flex-wrap items-center gap-4">
                <li className="inline-flex w-[130px] justify-center rounded-md bg-white py-2 px-6 text-[14px] text-gray-800 shadow-sm">
                  French
                </li>
                <li className="inline-flex w-[130px] justify-center rounded-md bg-white py-2 px-6 text-[14px] text-gray-800 shadow-sm">
                  Germany
                </li>
                <li className="inline-flex w-[130px] justify-center rounded-md bg-white py-2 px-6 text-[14px] text-gray-800 shadow-sm">
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
