import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" z-10  bg-[#FFF4EC] p-4 shadow-md   ">
      <div className="flex justify-between items-center max-w-5xl mx-auto ">
        <Link to="/">
          <img
            src="/TellMeLogo1.png"
            alt="TellMe Logo"
            className="h-7 md:h-14 "
          />
        </Link>
        <div className="flex flex-row justify-center items-center gap-4">
          <Link to="/workwithus" className="hover:underline text-xs md:text-lg">
            Work with us
          </Link>
          <Link to="/aboutus" className="hover:underline text-xs md:text-lg">
            About us
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
