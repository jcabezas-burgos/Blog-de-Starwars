import React from "react";
import { useState, useEffect } from "react";
import { CiAlarmOn } from "react-icons/ci";

const SecondsCounter = ({ props }) => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);

  let clock;
  useEffect(() => {
    clock = setInterval(() => {
      setSec(sec + 1);
      if (sec === 59) {
        setMin(min + 1);
        setSec(0);
      }
    }, 1000);
    return () => clearInterval(clock);
  });

  return (
    <div className="container-fluid bg-black">
      <div className="container align-items-center text-light display-1 d-flex justify-content-center">
      <h3><CiAlarmOn /> </h3>
        <div>
          <b className="border border-white mx-1">
            {min < 10 ? "0" + min : min}:
            {sec < 10 ? "0" + sec : sec}
          </b>
        </div>
      </div>
    </div>
  );
};

export default SecondsCounter;
