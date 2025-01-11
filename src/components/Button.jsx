import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ icon, text, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };
  return (
    <button
      onClick={handleClick}
      className="btn flex flex-col justify-center items-center h-[145px] w-[166px] bg-center bg-cover"
    >
      {icon}
      <span className="text-white text-xl translate-y-3 shadow-md font-Rubik">
        {text}
      </span>
    </button>
  );
};

export default Button;
