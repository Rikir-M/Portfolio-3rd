import React from "react";
import Riki from "../assets/nya.png";

const CaprainCard = () => {
  return (
    <div className="lg:h-[80%] rounded-md glassy-card">
      <div className="flex justify-between overflow-hidden">
        <div className="lg:w-[40%] -skew-x-12 -translate-x-1">
          <p className="md:text-lg lg:text-2xl font-semibold pl-4 pr-8 py-1 bg-primary text-black rounded-md rounded-tr-none">
            ID: 18194507
          </p>
        </div>
        <p className="text-3xl text-white -skew-x-12 pr-2">LV.88</p>
      </div>
      <div className="flex justify-between py-3 px-2">
        <div className="w-[40%] flex justify-center items-center">
          <img src={Riki} alt="profile" className="w-[60%] rounded-full" />
        </div>
        <div className="flex flex-col flex-1 gap-1">
          <div className="flex border border-gray-800 rounded pl-3 py-1">
            <h3 className="-skew-x-12 lg:text-2xl text-lg text-white">Rikir</h3>
          </div>
          <div className="signature-box lg:h-24 h-20 border border-gray-800 rounded pl-3 py-1">
            <p className="lg:text-xl text-sm text-gray-400">
              May all the beauty be blessed.
            </p>
          </div>
        </div>
      </div>
      <div className="black-bar h-7 bg-black"></div>
    </div>
  );
};

export default CaprainCard;
