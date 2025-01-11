import React from "react";
import SubButton from "../components/SubButton";
import Back from "../assets/Back.svg";
import CaprainCard from "../components/CaprainCard";
import LvlBlock from "../components/LvlBlock";

const About = () => {
  return (
    <div className="background h-screen bg-center bg-cover">
      <div className="h-screen px-[3%] py-3 backdrop-blur-xl">
        <div className="nav">
          <SubButton
            bgColor={"#FFE900"}
            navigateTo="/"
            icon={
              <img
                src={Back}
                alt="Back icon"
                className="-ml-2 skew-x-12"
              />
            }
            text={"BACK"}
          />
        </div>
        <div className="absolute w-[53%] lg:h-1/2 md:h-[40%] right-[3%] top-[20%] flex justify-between items-center
        ">
          <div className="w-[70%] h-full">
            <div className="flex gap-2 mb-2 -skew-x-12">
              <p className="md:text-3xl lg:text-5xl text-primary w-[40%]">Captain</p>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="text-primary">EXP</p>
                  <p className="text-white font-semibold">1000/1000</p>
                </div>
                <div className="ml-1 flex gap-1">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <LvlBlock key={index} color={"#18C7FF"} height={"10px"} width={"9%"} rounded={"1.5px"} shadow={"1px 1.5px #16799a"} />
                  ))}
                </div>
              </div>
            </div>
            <CaprainCard />
          </div>
          <div className="flex flex-col gap-5">
            <SubButton
              bgColor={"#ffffff"}
              navigateTo="/"
              // icon={
              //   <img
              //     src={Back}
              //     alt="Back icon"
              //     className="-ml-2 skew-x-12"
              //   />
              // }
              text={"Rikir"}
            />
            <SubButton
              bgColor={"#18C7FF"}
              color={"#ffffff"}
              navigateTo="/"
              // icon={
              //   <img
              //     src={Back}
              //     alt="Back icon"
              //     className="-ml-2 skew-x-12"
              //   />
              // }
              text={"Resume"}
            />
            <SubButton
              bgColor={"#18C7FF"}
              color={"#ffffff"}
              navigateTo="/"
              // icon={
              //   <img
              //     src={Back}
              //     alt="Back icon"
              //     className="-ml-2 skew-x-12"
              //   />
              // }
              text={"Fun Facts"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
