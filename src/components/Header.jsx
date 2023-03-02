import React from "react";
import { Link } from "react-router-dom";
import { RiMoonLine, RiMoonFill } from "react-icons/ri";

// import custom hooks color mode
import useColorMode from "../hooks/useColorMode";

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-[1440px] bg-white shadow-sm transition-all duration-300 dark:bg-gray-700">
      <div className="container flex h-24 items-center justify-between">
        <Link to="/" className="section-title text-[20px] dark:text-white">
          Where in the world?
        </Link>

        <div
          className="inline-flex cursor-pointer items-center gap-[6px] text-[14px] font-semibold text-gray-900 dark:text-white"
          onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        >
          {colorMode === "light" ? (
            <RiMoonLine size="1.3rem" />
          ) : (
            <RiMoonFill size="1.3rem" />
          )}
          Dark Mode
        </div>
      </div>
    </header>
  );
};

export default Header;
