import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  };

  const padZero = (number) => {
    return (number < 10 ? "0" : "") + number;
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat m-0 h-screen w-screen flex justify-center items-center"
      style={{ backgroundImage: "url('./public/background.png')" }}
    >
      <div className="text-6xl font-bold text-white text-center font-mono filter backdrop-blur-md w-screen py-8">
        <span>{formattedTime()}</span>
      </div>
    </div>
  );
};

export default DigitalClock;
