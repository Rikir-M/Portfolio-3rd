import React from "react";
import { useNavigate } from "react-router-dom";

const SubButton = ({ text, icon, navigateTo, bgColor, color }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="border-[3px] border-x-white border-y-0 px-5 py-2 text-black font-medium flex justify-center items-center -skew-x-12 rounded-lg"
      style={{ backgroundColor: bgColor, color: color }}
    >
      {icon}
      <span className="skew-x-12">{text}</span>
    </button>
  );
};

export default SubButton;
