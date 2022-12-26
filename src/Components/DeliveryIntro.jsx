import React from "react";
import Food from "../assets/fresh food.png";
import Delivery from "../assets/delivery.png";
import Quality from "../assets/quality.png";
import Easy from "../assets/food-delivery.png";


export default function DeliveryIntro() {
  return (
    <div className="">
      <div className="text-center">
        <p className="text-red-500 font-semibold max-sm:mt-20">WHAT WE SERVE </p>
        <h1 className="sm:text-4xl uppercase text-orange-500 font-bold food">
          Your Favourite food partner
        </h1>
      </div>
      <div className="grid grid-cols-4 place-items-center max-sm:grid-cols-1">
        <div className="shadow-lg shadow-indigo-500/40 p-9 mt-10 rounded text-center">
          <h1 className="font-semibold text-red-400 text-3xl text-center">Fresh food</h1>
          <img className="w-44 mt-5 grid place-content-center" src={Food}/>
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
