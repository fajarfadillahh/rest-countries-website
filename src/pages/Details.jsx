import React from "react";

// import components
import Header from "../components/Header";
import CountryDetails from "../components/CountryDetails";

const Details = () => {
  return (
    <>
      <Header />
      <main className="mx-auto min-h-screen max-w-[1440px] overflow-hidden bg-gray-500 transition-all duration-300 dark:bg-gray-800">
        <CountryDetails />
      </main>
    </>
  );
};

export default Details;
