import React from "react";

// import components
import Header from "../components/Header";
import Countries from "../components/Countries";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Countries />
      </main>
    </>
  );
};

export default Home;
