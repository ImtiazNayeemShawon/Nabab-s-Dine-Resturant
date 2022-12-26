import React from "react";
import { useState } from "react";

import Logo from "../assets/logo.png";

export default function Navbar() {
  const [alert, setAlert] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav class="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 shadow-xl">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <span class="">
            
            <img className="w-12 rounded-md"
        src={Logo}
        alt="logo"
      
      /> 
          </span>

          <div class="flex md:order-2">
            <button
              type="button"
              class="text-white bg-orange-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
              onClick={() => setAlert(!alert)}
            >
              Login
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setOpen(!open)}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-orange-400 dark:border-orange-700">
              <li>
                <a
                  href="/"
                  class="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="RoboticsShop"
                  class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white"
                >
Our menu
                </a>
              </li>
              <li>
                <a
                  href="About"
                  class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="Achivments"
                  class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white"
                >
                  Offers
                </a>
              </li>
              <li>
                <a
                  href="Gellary"
                  class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white"
                >
                  About us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {open && (
        <div className="mt-1 fixed bg-slate-50 shadow-xl shadow-indigo p-16  rounded py-9 md:hidden cursor-pointer">
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
              Our menu
            </a>
            <a
              href="About"
              onClick={() => setOpen(!open)}
              className=" list-item mb-10  hover:bg-slate-200 p-2 rounded text-center text-black"
            >
              About
            </a>
            <a
              href="Achivments"
              onClick={() => setOpen(!open)}
              className="list-item mb-10  hover:bg-slate-200 p-2 rounded text-center text-black"
            >
              Achievements
            </a>
            <a
              href="Gallery"
              onClick={() => setOpen(!open)}
              className="list-item mb-10  hover:bg-slate-200 p-2 rounded text-center text-black"
            >
              Projects
            </a>
          </ul>
        </div>
      )}
      {alert && (
        <div className="mt-20 fixed  right-4 max-sm:right-0 m-2 max-sm:mt-10">
          <p class="  block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p
              onClick={() => setAlert(!alert)}
              className="mb-10 text-red-700 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </p>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-600 dark:text-white">
              Work in progress
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Sorry for this issue We are working on this login system , we
              update it as soon as possible.
              <br />
              Thank you for visiting
            </p>
          </p>
        </div>
      )}
    </div>
  );
}