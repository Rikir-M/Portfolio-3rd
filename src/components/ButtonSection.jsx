import React from "react";
import Button from "./Button";

const ButtonSection = () => {
  const buttons = [
    {
      id: 1,
      icon: "",
      text: "Skills",
      onClick: () => console.log("Skills clicked"),
    },
    {
      id: 2,
      icon: "",
      text: "Projects",
      onClick: () => console.log("Projects clicked"),
    },
    {
      id: 3,
      icon: "",
      text: "Something",
      onClick: () => console.log("Something clicked"),
    },
  ];
  return (
    <div className="relative w-1/3 h-1/2 flex items-center justify-center right-[5%] top-1/4 ml-auto">
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
            onClick={button.onClick}
          />
        </div>
      ))}
    </div>
  );
};

export default ButtonSection;
