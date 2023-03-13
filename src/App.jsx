import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Details from "./pages/Details";

// import components
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />

      <main className="mx-auto min-h-screen max-w-[1440px] overflow-hidden bg-gray-500 transition-all duration-300 dark:bg-gray-800">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/country/:countryCode" element={<Details />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
