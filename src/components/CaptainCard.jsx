import React, { useState } from "react";
import Riki from "../assets/nya.png";
import "./CaptainCard.css";

const CaptainCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped((prev) => !prev);
  };
  return (
    <div
      className={`lg:h-[17rem] card-container ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardFlip}
    >
      <div className="h-full card-front rounded-md glassy-card">
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
              <h3 className="-skew-x-12 lg:text-2xl text-lg text-white">
                Rikir
              </h3>
            </div>
            <div className="signature-box lg:h-24 h-20 border border-gray-800 rounded pl-3 py-1">
              <p className="lg:text-xl text-sm text-gray-400">
                May all the beauty be blessed.
              </p>
            </div>
          </div>
        </div>
        <div className="black-bar h-9 bg-black"></div>
      </div>
      <div className="h-full card-back rounded-md glassy-card overflow-y-auto custom-scrollbar">
        <div className="p-4 text-white text-center h-full">
          <h2 className="lg:text-3xl text-xl font-bold">About Rikir</h2>
          <p className="lg:text-base text-sm mt-2">
            I am a web developer with two years of experience, passionate about
            creating interactive and creative web experiences. My main focus
            right now is front-end development, but my ultimate dream is to dive
            into game development and bring my ideas to life.
          </p>
          <p className="lg:text-base text-sm mt-2">
            I'm just a simple person who like to explore and experience video
            games. When I'm not coding, I'm probably exploring new video games,
            appreciating the artistry and storytelling they offer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainCard;
