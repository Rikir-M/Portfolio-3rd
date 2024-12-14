import React from "react";

const Button = ({ icon, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn flex flex-col justify-center items-center h-[145px] w-[166px] bg-center bg-cover"
    >
      {icon}
      <span className="text-white text-2xl font-Rubik">{text}</span>
    </button>
  );
};

export default Button;
