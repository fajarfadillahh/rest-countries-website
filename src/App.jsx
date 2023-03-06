import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/country/:numericCode" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
