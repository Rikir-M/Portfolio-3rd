import React, { useEffect, useState } from "react";

const Phone = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="absolute right-[5%] bottom-[.2%] w-[50px] h-20 rounded-sm bg-primary flex flex-col items-center">
      <span className="time text-white font-Rubik tracking-tighter pt-1">
        {time}
      </span>
    </div>
  );
};

export default Phone;
