import React from "react";

// import components
import Header from "../components/Header";
import Countries from "../components/Countries";

const Home = () => {
  return (
    <>
      <main className="mx-auto min-h-screen max-w-[1440px] overflow-hidden bg-gray-500">
        <Header />
        <Countries />
      </main>
    </>
  );
};

export default Home;
