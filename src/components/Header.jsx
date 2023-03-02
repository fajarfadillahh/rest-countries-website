import React from "react";
import { Link } from "react-router-dom";
import { RiMoonLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-[1440px] bg-white shadow-sm">
      <div className="container flex h-24 items-center justify-between">
        <Link to="/" className="section-title text-[20px]">
          Where in the world?
        </Link>

        <div className="inline-flex cursor-pointer items-center gap-[6px] text-[14px] font-semibold text-gray-900">
          <RiMoonLine size="1.3rem" />
          Dark Mode
        </div>
      </div>
    </header>
  );
};

export default Header;
