import React from "react";

const Finished = () => {
  return (
    <div className="vote-status-wrapper">
      <span className="finished">
        <i className="bi bi-check2-circle"></i>
        <span className="text-normal">The election has finished. Please wait for the new election to begin.</span>
      </span>
    </div>
  );
};

export default Finished;
