import React, { useEffect, useState } from "react";

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
          <h3>form input</h3>
          <h3>menu dropdown</h3>
        </div>

        <div className="grid justify-items-center gap-12">
          {countries.slice(0, 12).map((country) => {
            return <CountryCard key={country.alpha2Code} country={country} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Countries;
