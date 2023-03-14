import React from "react";

// import components
import Header from "../components/Header";
import CountryDetails from "../components/CountryDetails";

const Details = () => {
  return (
    <>
      <Header />
      <main className="main">
        <CountryDetails />
      </main>
    </>
  );
};

export default Details;
