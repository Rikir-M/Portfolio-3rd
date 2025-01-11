import React from "react";
import LvlBlock from "./LvlBlock";
import { Link } from "react-router-dom";

const Captain = () => {
  return (
    <div className="absolute">
      <Link to="/about-rikir">
        <p className="name text-white text-2xl tracking-wider font-Rubik">
          LV.88 Rikir
        </p>
        <div className="flex gap-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <LvlBlock
              key={index}
              color={"#18C7FF"}
              height={"6px"}
              width={"24px"}
            />
          ))}
        </div>
      </Link>
    </div>
  );
};

export default Captain;
