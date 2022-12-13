import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white   py-0 fixed w-full">
        <div className=" flex  items-center ">
          <a href="/" className="flex items-center">
            <img
              src={Logo}
              className="h-14 mr-3  rounded-3xl sm:h-12"
              alt="logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-gray">
              Nabab's Dine
            </span>
          </a>
          <button
            className=" p-2 ml-20 text-m text-black-500 rounded-lg md:hidden  bg-orange-300  hover:bg-slate-200"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 md:text-gray-700 md:p-0 dark:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link className="block py-2 pl-3 pr-4 md:text-gray-700 md:p-0 dark:text-white">
                  Menu
                </Link>
              </li>
              <li>
                <Link className="block py-2 pl-3 pr-4 md:text-gray-700 md:p-0 dark:text-white">
                  What we serve
                </Link>
              </li>
              <li>
                <Link className="block py-2 pl-3 pr-4 md:text-gray-700 md:p-0 dark:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link className="block py-2 pl-3 pr-4 md:text-gray-700 md:p-0 dark:text-white">
                  Contact
                </Link>
              </li>
              <li className="rounded bg-orange-400 p-0 text-slate-100 font-bold">
                <Link className="block ">Order now</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {open && (
         <div className="mt-20 fixed bg-slate-50 shadow-xl shadow-indigo p-16  rounded py-9 md:hidden cursor-pointer">
         <ul className="text-black-600 font-semibold list-item">
           <a
             href="/"
             className=" list-item mb-10  hover:bg-slate-200 p-2 rounded text-center text-black"
             onClick={() => setOpen(!open)}
           >
             Home
           </a>
           <a
            href="RoboticsShop"
             className=" list-item mb-10  hover:bg-slate-200 p-2 rounded text-center text-black"
             onClick={() => setOpen(!open)}
           >
             Menu
           </a>
           <a
             href="About"
             onClick={() => setOpen(!open)}
             className=" list-item mb-10  hover:bg-slate-200 p-2 rounded text-center text-black"
           >
             What we serve
           </a>
           <a
             href="Achivments"
             onClick={() => setOpen(!open)}
             className="list-item mb-10  hover:bg-slate-200 p-2 rounded text-center text-black"
           >
             About us
           </a>
           <a
             href="Gallery"
             onClick={() => setOpen(!open)}
             className="list-item mb-10  hover:bg-slate-200 p-2 rounded text-center text-black"
           >
             Contact
           </a>
         </ul>
       </div>
      )}
    </div>
  );
}
