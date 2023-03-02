import axios from "axios";

const baseURL = "https://restcountries.com/v2";

// get all countries
export const getAllCountries = async () => {
  const allCountries = await axios.get(`${baseURL}/all`);

  return allCountries.data;
};
