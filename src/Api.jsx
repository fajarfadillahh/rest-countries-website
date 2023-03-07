import axios from "axios";

const baseURL = "https://restcountries.com/v2";

// get all countries
export const getAllCountries = async () => {
  const allCountries = await axios.get(`${baseURL}/all`);

  return allCountries.data;
};

// get country by code [ISO 3166-1 alpha-2]
export const getCountryByCode = async (code) => {
  const countryByCode = await axios.get(`${baseURL}/alpha/${code}`);

  return countryByCode.data;
};
