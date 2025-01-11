import React from "react";

const LvlBlock = ({ color, height, width, rounded, shadow }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        height: height,
        width: width,
        borderRadius: rounded,
        boxShadow: shadow,
      }}
    ></div>
  );
};

export default LvlBlock;
