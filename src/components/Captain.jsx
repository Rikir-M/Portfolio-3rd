import React from "react";
import LvlBlock from "./LvlBlock";

const Captain = () => {
  return (
    <div className="absolute py-3 ps-[5%]">
      <a href="" className="">
        <p className="name text-white text-2xl tracking-wider font-Rubik">
          LV.88 Rikir
        </p>
        <div className="flex gap-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <LvlBlock key={index} />
          ))}
        </div>
      </a>
    </div>
  );
};

export default Captain;
