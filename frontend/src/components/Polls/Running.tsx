import React from "react";
import Timer from "./Timer"

const Running = () => {
  return (
    <div className="vote-status-wrapper">
      <p>LIVE</p>
      <div className="running"></div>
    
        {/* <Timer initialSeconds={60}/> */}
    </div>
  );
};

export default Running;
