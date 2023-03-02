import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

// import Api
import { getAllCountries } from "../Api";

// import components
import CountryCard from "./CountryCard";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getAllCountries()
      .then((result) => {
        setCountries(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="section pt-32">
      <div className="container grid gap-8">
        <div className="grid gap-12">
          <form className="flex h-[56px] max-w-lg items-center rounded-md bg-white shadow-sm">
            <button
              type="submit"
              className="inline-flex h-full min-w-[80px] items-center justify-center text-[1.3rem] text-gray-600"
              onClick={(e) => e.preventDefault()}
            >
              <RiSearchLine />
            </button>
            <input
              type="text"
              placeholder="Search for a country..."
              className="h-full w-full bg-transparent pr-8 font-semibold text-gray-900 outline-none placeholder:text-gray-600"
            />
          </form>

          <h3>menu dropdown</h3>
        </div>

        <div className="grid gap-12 justify-self-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {countries.slice(0, 12).map((country) => {
            return <CountryCard key={country.alpha2Code} country={country} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Countries;
