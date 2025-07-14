import React from "react";
import SubButton from "../components/SubButton";
import Back from "../assets/Back.svg";
import BackgroundImg from "../../public/Background.webp";
import ButtonImg from "../../public/Button-bg.webp";

const Credits = () => {
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
        <div className="h-[85%] flex justify-center items-center">
          <div className="h-[95%] w-2/3 mx-auto text-white shadow-lg rounded-2xl py-6 pl-6 pr-3 glassy-card overflow-auto">
            <div className="custom-scrollbar pr-3 h-full overflow-auto">
              <h1 className="text-center text-3xl">Credits</h1>
              <p className="py-5">
                This project includes design elements and assets inspired by{" "}
                <a
                  className="text-lg text-primary"
                  href="https://honkaiimpact3.hoyoverse.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Honkai Impact 3rd
                </a>
                , a game developed by HoYoverse.
              </p>
              <div className="pb-5">
                <h3 className="text-2xl">Design Inspiration</h3>
                <p className="py-3">
                  The overall UI design of this site is a direct reproduction of
                  elements from Honkai Impact 3rd. All design choices, including
                  layout, color scheme, and styling, are inspired by the
                  aesthetic of the game. Although the icons and the character
                  have been created by me, the design is a direct homage to the
                  game's user interface.
                </p>
              </div>
              <div className="pb-5">
                <h3 className="text-2xl pb-3">Background Image</h3>
                <img src={BackgroundImg} alt="" className="w-[70%] mx-auto" loading="lazy" />
                <p className="text-xs text-center pt-1">
                  Source:{" "}
                  <a
                    href="https://honkaiimpact3.fandom.com/wiki/Honkai_Impact_3_Wiki?file=Background.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Honkai Impact 3rd Wiki
                  </a>
                </p>
                <p className="py-3">
                  The background image used is sourced from the{" "}
                  <span className="font-bold">Honkai Impact 3rd wiki</span>. All
                  rights to the image belong to HoYoverse. It was used for
                  aesthetic and inspirational purposes.
                </p>
              </div>
              <div className="pb-5">
                <h3 className="text-2xl pb-3">Button Background</h3>
                <img src={ButtonImg} alt="" className="w-[30%] mx-auto" loading="lazy" />
                <p className="text-xs text-center pt-1">
                  Source:{" "}
                  <a
                    href="https://honkaiimpact3.fandom.com/wiki/Honkai_Impact_3_Wiki?file=Button_New_Big_BG.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Honkai Impact 3rd Wiki
                  </a>
                </p>
                <p className="py-3">
                  The button images used on this site are also sourced from the{" "}
                  <span className="font-bold">Honkai Impact 3rd wiki</span>.
                  These images reflect the button design style from the game and
                  are used to maintain visual consistency with the original
                  theme.
                </p>
              </div>
              <div className="pb-5">
                <h3 className="text-2xl">License</h3>
                <p className="py-3">
                  The assets and design are for{" "}
                  <span className="font-bold">personal, non-commercial</span>{" "}
                  use only. No copyrighted materials have been used
                  inappropriately, and credit has been given where due. The site
                  is intended solely as a personal portfolio and not for resale
                  or commercial purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
