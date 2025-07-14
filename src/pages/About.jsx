import React from "react";
import SubButton from "../components/SubButton";
import Back from "../assets/Back.svg";
import CaptainProfile from "../components/CaptainProfile";
import AboutBtns from "../components/AboutBtns";
import Mei from "../../public/Aqueous_Springtide.webp";

const About = () => {
  return (
    <div className="background h-screen bg-center bg-cover">
      <div className="h-screen px-[5%] py-3 backdrop-blur-xl">
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
        <img className="absolute left-[-6%] h-available" src={Mei} alt="" loading="lazy" />
        <div className="w-full lg:h-[85%] flex lg:justify-center lg:items-center">
          <div className="flex w-2/3">
            <div className="flex-1"></div>
            <CaptainProfile />
          </div>
          <AboutBtns active="rikir" />
        </div>
      </div>
    </div>
  );
};

export default About;
