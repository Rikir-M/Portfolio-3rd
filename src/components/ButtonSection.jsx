import React from "react";
import Button from "./Button";
import Projects from "../assets/Projects.svg";

const ButtonSection = () => {
  const buttons = [
    {
      id: 1,
      icon: "",
      text: "Skills",
      // navigateTo:"/skills"
    },
    {
      id: 2,
      icon: <img src={Projects} alt="Projects icon" className="shadow-lg w-[80px]"/>,
      text: "Projects",
      // navigateTo:"/projects"
    },
    {
      id: 3,
      icon: "",
      text: "Credits",
      navigateTo:"/credits"
    },
  ];
  return (
    <div className="relative w-1/3 h-1/2 flex items-center justify-center top-1/4 ml-auto">
      {buttons.map((button, index) => (
        <div
          key={button.id}
          className="absolute"
          style={{
            top: `${index * 90}px`, // Adjust vertical spacing
            right: index % 2 === 0 ? "0px" : "150px", // Alternating zig-zag
          }}
        >
          <Button
            icon={button.icon}
            text={button.text}
            navigateTo={button.navigateTo}
          />
        </div>
      ))}
    </div>
  );
};

export default ButtonSection;
