import React from "react";
import SubButton from "../components/SubButton";
import Back from "../assets/Back.svg";
import ResumePart from "../components/ResumePart";
import AboutBtns from "../components/AboutBtns";

const Resume = () => {
  return (
    <div className="background h-screen bg-center bg-cover">
      <div className="h-screen px-[5%] py-3 backdrop-blur-2xl">
        <div className="nav">
          <SubButton
            bgColor={"#FFE900"}
            navigateTo="/"
            icon={
              <img src={Back} alt="Back icon" className="-ml-2 skew-x-12" />
            }
            text={"BACK"}
          />
        </div>
        <div className="flex sm:justify-center sm:items-center h-[85%]">
          <ResumePart />
          <AboutBtns active="resume" />
        </div>
      </div>
    </div>
  );
};

export default Resume;
