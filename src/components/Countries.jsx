import React, { useEffect, useState } from "react";

// import axios &  api
import axios from "axios";
import { apiURL } from "../utils/Api";

// import components
import CountryCard from "./CountryCard";
import CountryFilter from "./CountryFilter";
import CountrySearch from "./CountrySearch";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  // get all country
  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const response = await axios.get(`${apiURL}/all`);
        setCountries(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getAllCountries();
  }, []);

  return (
    <section className="section pt-32">
      <div className="container grid gap-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <CountrySearch setCountries={setCountries} />

          <CountryFilter />
        </div>

        {countries && (
          <div className="grid gap-12 justify-self-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {countries.slice(0, 48).map((country) => {
              return <CountryCard key={country.alpha2Code} country={country} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Countries;
