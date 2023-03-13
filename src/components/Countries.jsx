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
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // get all country
  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const response = await axios.get(`${apiURL}/all`);
        setCountries(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getAllCountries();
  }, []);

  useEffect(() => {
    // filter country by continent/region
    const filtered =
      selectedContinent === "All"
        ? countries
        : countries.filter((country) => country.region === selectedContinent);

    // search country
    const searhed =
      searchTerm === ""
        ? filtered
        : filtered.filter((country) =>
            country.name.toLowerCase().includes(searchTerm.toLowerCase())
          );

    setFilteredCountries(searhed);
  }, [countries, selectedContinent, searchTerm]);

  // handle select continent
  const handleSelectedContinent = (continent) => {
    setSelectedContinent(continent);
  };

  // handle search country
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="section pt-32">
      <div className="container grid gap-8">
        {isLoading ? (
          <p className="text-[18px] font-semibold -tracking-tighter text-white">
            Loading data countries...
          </p>
        ) : (
          <div className="grid gap-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <CountrySearch setCountry={handleSearch} />

              <CountryFilter setContinent={handleSelectedContinent} />
            </div>

            <div className="grid gap-12 justify-self-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredCountries.slice(0, 30).map((country) => (
                <CountryCard key={country.alpha2Code} country={country} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Countries;
