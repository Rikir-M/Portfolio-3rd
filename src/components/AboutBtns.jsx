import React from "react";
import SubButton from "./SubButton";

const AboutBtns = ({ active }) => {
  return (
    <div className="absolute h-[95%] flex sm:right-[5%]">
      <div className="flex lg:flex-col gap-5 my-auto">
        <SubButton
          bgColor={active === "rikir" ? "#FFFFFF" : "#18C7FF"}
          color={active === "rikir" ? "#000000" : "#FFFFFF"}
          navigateTo="/about-rikir"
          text="Rikir"
        />
        <SubButton
          bgColor={active === "resume" ? "#FFFFFF" : "#18C7FF"}
          color={active === "resume" ? "#000000" : "#FFFFFF"}
          navigateTo="/resume"
          text="Resume"
        />
        <SubButton
          bgColor={active === "hobbies" ? "#FFFFFF" : "#18C7FF"}
          color={active === "hobbies" ? "#000000" : "#FFFFFF"}
          navigateTo="/hobbies"
          text="Hobbies"
        />
      </div>
    </div>
  );
};

export default AboutBtns;
