import React from "react";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 70) setIsScroll(true);
      else setIsScroll(false);

      console.log(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNavBar() {
    setNav(!nav);
  }

  return (
    <header
      className={
        isScroll
          ? `bg-black md:black sticky top-0 left-0 right-0 py-0 duration-300 ease-in-out z-20`
          : `bg-black md:fixed sticky top-0 left-0 right-0 py-0 md:bg-transparent md:py-6 z-20`
      }>
      <div className="w-full max-w-[1240px] mx-auto">
        {/* Mobile devices */}
        <div className="flex items-center justify-between text-white px-4 h-16 ">
          <h1 className="cursor-pointer font-bold text-2xl text-gray-200">MEETME</h1>
          <div onClick={handleNavBar} className="block md:hidden">
            {nav ? <FaTimes size={24} className="cursor-pointer" /> : <FaBars size={24} className="cursor-pointer" />}
          </div>

          <div className="hidden md:block">
            <ul className="flex">
              <li className="uppercase cursor-pointer text-sm font-medium py-3 px-6 text-white">HOME</li>
              <li className="uppercase cursor-pointer text-sm font-medium py-3 px-6 text-white">ABOUT</li>
              <li className="uppercase cursor-pointer text-sm font-medium py-3 px-6 text-white">SERVICES</li>
              <li className="uppercase cursor-pointer text-sm font-medium py-3 px-6 text-white">PAGES</li>
              <li className="uppercase cursor-pointer text-sm font-medium py-3 px-6 text-white">BLOG</li>
              <li className="uppercase cursor-pointer text-sm font-medium py-3 px-6 text-white">CONTACT</li>
            </ul>
          </div>
        </div>

        {nav && (
          <div className="shadow-md">
            <ul>
              <li className="uppercase cursor-pointer text-sm font-medium border-b border-gray-800 py-3 px-4 text-white">
                HOME
              </li>
              <li className="uppercase cursor-pointer text-sm font-medium border-b border-gray-800 py-3 px-4 text-white">
                ABOUT
              </li>
              <li className="uppercase cursor-pointer text-sm font-medium border-b border-gray-800 py-3 px-4 text-white">
                SERVICES
              </li>
              <li className="uppercase cursor-pointer text-sm font-medium border-b border-gray-800 py-3 px-4 text-white">
                PAGES
              </li>
              <li className="uppercase cursor-pointer text-sm font-medium border-b border-gray-800 py-3 px-4 text-white">
                BLOG
              </li>
              <li className="uppercase cursor-pointer text-sm font-medium py-3 px-4 text-white">CONTACT</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
