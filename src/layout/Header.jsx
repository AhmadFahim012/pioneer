import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Favorites from "../components/Favorites";
import AddToCart from "../components/AddToCart";
import { RiMenu5Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import MobileMenu from "../utils/MobileMenu";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="bg-navbar-bg bg-center bg-cover bg-no-repeat px-8 ">
        <div className="lg:flex hidden  justify-between items-center gap-2">
          <div className="p-4">
            <img src="logo.svg" alt="" />
          </div>

          <div className="relative">
            <div className="flex items-center gap-4">
              <button className=" custom-button bg-white mt-5 py-2 px-4 rounded-md flex montserat-fonts text-base font-bold items-center justify-center text-black">
                Categories
              </button>
              <div className="flex-grow ">
                <SearchBar />
              </div>
            </div>
            <ul className="flex justify-center relative top-4 ">
              <li className="flex gap-10">
                <a
                  href="/"
                  className="text-white montserat-fonts text-[15px] font-normal"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="text-white montserat-fonts text-[15px] font-normal"
                >
                  About Us
                </a>
                <a
                  href="/"
                  className="text-white montserat-fonts text-[15px] font-normal"
                >
                  Collections
                </a>
                <a
                  href="/"
                  className="text-white montserat-fonts text-[15px] font-normal"
                >
                  New Arrivals
                </a>
                <a
                  href="/"
                  className="text-white montserat-fonts text-[15px] font-normal"
                >
                  Best Sellers
                </a>
                <a
                  href="/"
                  className="text-white montserat-fonts text-[15px] font-normal"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <Favorites />
          <AddToCart />
          <button className=" bg-white py-2 px-4 rounded-md flex items-center montserat-fonts text-base font-bold justify-center text-black">
            Sign in
          </button>
        </div>

        <div className="lg:hidden  flex justify-between items-center">
          <div className="p-3">
            <img src="logo.svg" alt="" />
          </div>
          <MobileMenu />
          <div>
       
          </div>
        </div>
      </div>
    </>
  );
}
