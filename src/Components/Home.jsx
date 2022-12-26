import React from "react";
import Styles from "../Styles/Home.module.css";
import { Link } from "react-router-dom";
import Food from "../assets/food.png";



export default function Home() {
  return (
    <div className={Styles.Home}>
      <div className="grid grid-cols-2 max-sm:grid-cols-1">
        <div className="mt-40 ml-20 max-sm:ml-0 max-sm:mx-2">
          {" "}
          <h1 className="first-letter:text-8xl max-sm:text-center ">
            <span className="font-bold text-5xl text-gray-800 max-sm:text-center"> Nabab's Dine Restaurant </span>{" "}
            <br />
            <span className="text-xl font-semibold text-orange-500">We serve healthy food for your good mood</span>
          </h1>{" "}
          <p className="max-sm:text-center text-lg">
            Healthy switcher chefs do all the prep work, like peeding,
            chopping & marinating, so you cook a fresh food{" "}
          </p>
          <div className="mt-9 max-sm:mt-2 max-sm:place-items-center max-sm:grid max-sm:grid-cols-2">
            <button className="text-white font-bold bg-orange-500 p-3 rounded">
              Order now
            </button>
            <button class="text-orange-500 font-bold bg-white p-3 rounded m-8 border-2 border-orange-300">
              See menu
            </button>
          </div>
        </div>
        <div className="mt-40 max-sm:mt-0">
          <img src={Food}/>
        </div>
      </div>
    </div>
  );
}
