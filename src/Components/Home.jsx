import React from "react";
import Styles from "../Styles/Home.module.css";
import { Link } from "react-router-dom";
import Food from "../assets/food.png";
import "../Styles/Responsive.css"
export default function Home() {
  return (
    <div className={Styles.Home}>
      <div className={Styles.Info}>
        <div className="sm:ml-20 mt-40 ">
          {" "}
          <h1 className="first-letter:text-8xl sm:text-center">
            <span className={Styles.name}> Nabab's Dine Restaurant </span>{" "}
            <br />
            we serve healthy food for your good mood
          </h1>{" "}
          <p>
            Healthy switcher chefs do all the prep work, like peeding, <br />{" "}
            chopping & marinating, so you cook a fresh food{" "}
          </p>
          <div className="mt-10">
            <Link className="p-3   text-white bg-orange-400 rounded-2xl ">
              Order now
            </Link>
            <Link class="bg-white-100 text-orange-500 font-semibold sm:py-2 sm:px-4 border border-orange-500 hover:border-transparent rounded sm:ml-10 mt-20 menu">
              See menu
            </Link>
          </div>
        </div>
        <div className={Styles.Food}>
          <img src={Food}/>
        </div>
      </div>
    </div>
  );
}
