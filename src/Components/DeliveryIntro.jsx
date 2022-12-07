import React from "react";
import Styles from "../Styles/Delivery.module.css";
import Food from "../assets/fresh food.png";
import Delivery from "../assets/delivery.png";
import Quality from "../assets/quality.png";
import Easy from "../assets/food-delivery.png";
import "../Styles/Responsive.css";

export default function DeliveryIntro() {
  return (
    <div className={Styles.DeliverySection}>
      <div className="text-center">
        <p className="text-red-500 font-semibold">WHAT WE SERVE </p>
        <h1 className="sm:text-4xl uppercase text-orange-500 font-bold food">
          Your Favourite food partner
        </h1>
      </div>
      <div className={Styles.Features}>
        <div className="shadow-lg shadow-indigo-500/40 p-9 mt-10 rounded text-center">
          <h1 className="font-semibold text-red-400 text-3xl text-center">Fresh food</h1>
          <img className="w-44 mt-5" src={Food}/>
        </div>
        <div className="shadow-lg shadow-indigo-500/40 p-9 mt-10 rounded text-center">
          <h1 className="font-semibold text-red-400 text-3xl text-center">Best quality</h1>
          <img className="w-44 mt-5" src={Quality}/>
        </div>
        <div className="shadow-lg shadow-indigo-500/40 p-9 mt-10 rounded text-center">
          <h1 className="font-semibold text-red-400 text-3xl ">Fastest delivery</h1>
          <img className="w-44 mt-5" src={Delivery}/>
        </div>
        <div className="shadow-lg shadow-indigo-500/40 p-9 mt-10 rounded text-center"><h1 className="font-semibold text-red-400 text-3xl text-center">Easy to order</h1>
        <img className="w-44 mt-5" src={Easy}/>
        </div>
       
      </div>
    </div>
  );
}
