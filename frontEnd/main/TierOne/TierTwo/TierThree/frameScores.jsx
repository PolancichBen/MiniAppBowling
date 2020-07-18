import React from "react";

const FrameScore = (props) => {
  if (props.frameNumber === 9) {
    return (
      <div className="lastFrame">
        <div className="bowlOne">
          {props.bowls.bowlOne}
        </div>
        <div className="bowlTwo">
          {props.bowls.bowlTwo}
        </div>
        <div className="bowlThree">
          {props.bowls.bowlThree}
        </div>
      </div>
    )
  } else {
    return (
      <div className="notLastFrame">
        <div className="bowlOne">
          {props.bowls.bowlOne}
        </div>
        <div className="bowlTwo">
          {props.bowls.bowlTwo}
        </div>
      </div>
    )
  }
};

export default FrameScore;
