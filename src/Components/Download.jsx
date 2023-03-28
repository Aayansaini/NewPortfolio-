import React from "react";
import Confetti from "./Confetti";

const Download = () => {
  return (
    <>
      <div className="section section-box3">
        <div className="container container-box3">
          <div className="row Rotation">
            <h1 className="col-sm-4 R-1">⭐️</h1>
            <h1 className="col-sm-4 R-2">
              <Confetti />
            </h1>
            <h1 className="col-sm-4 R-1">⭐️</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
