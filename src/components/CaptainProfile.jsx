import React from "react";
import CaptainCard from "./CaptainCard";
import LvlBlock from "./LvlBlock";

const CaptainProfile = () => {
  return (
    <div className="sm:w-[60%]">
      <div className="flex gap-2 mb-2 -skew-x-12">
        <p className="text-3xl lg:text-5xl text-primary w-[40%]">Captain</p>
        <div className="flex-1">
          <div className="flex justify-between">
            <p className="text-primary">EXP</p>
            <p className="text-white font-semibold">1000/1000</p>
          </div>
          <div className="ml-1 flex gap-1">
            {Array.from({ length: 10 }).map((_, index) => (
              <LvlBlock
                key={index}
                color={"#18C7FF"}
                height={"10px"}
                width={"9%"}
                rounded={"1.5px"}
                shadow={"1px 1.5px #16799a"}
              />
            ))}
          </div>
        </div>
      </div>
      <CaptainCard />
    </div>
  );
};

export default CaptainProfile;
