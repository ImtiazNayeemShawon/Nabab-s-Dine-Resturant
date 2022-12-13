import React from "react";
import Styles from "../Styles/Menu.module.css";
import Data from "../Data/food.json";
import { useState } from "react";
import "../Styles/Responsive.css"

export default function Menu() {
  const [show, setShow] = useState();

  return (
    <div className={Styles.Menu}>
      <div className="text-center mt-40">
        <h1 className="text-orange-500 sm:text-4xl mt-4 uppercase font-bold explore">
          Explore our best menu
        </h1>
        <h2 className="text-red-400 text-sm font-semibold">
          it's trough mistakes that you actually can grow you get rid of everything that is not essential to makihave to get bad 
        </h2>
        <div>
          {show && (
            <div
              class="  p-4 mb-4 text-sm text-red-700 bg-red-700 rounded-lg dark:bg-red-200 dark:text-red-800 animate__animated animate__bounce"
              role="alert"
            >
              <span class="font-medium text-red-600">Work in progress ! </span> Order system is coming soon thank you.
            </div>
          )}
        </div>
      </div>
      <div className="Items">
        <div className={Styles.Itemsmenu}>
          {Data.map((names) => {
            return (
              <div className="bg-black-100 shadow-lg p-10 m-4  rounded shadow-indigo-500/40 content-center grid place-items-center">
                <p className="top-0 bottom-4 text-center font-semibold uppercase">
                  Chicken fry
                </p>
                <img className="chicken" src="https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?size=626&ext=jpg&ga=GA1.2.324834097.1668760465"/> <br/>
                <p className=" text-center uppercase">
                  3pcs:{names.large_price}  
                  
                </p>
                <br/>
                <button
                  className="bg-orange-500 text-slate-50 font-semibold uppercase p-2 rounded mt-6   hover:bg-orange-400  order "
                  onClick={setShow}
                >
                  Order now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
