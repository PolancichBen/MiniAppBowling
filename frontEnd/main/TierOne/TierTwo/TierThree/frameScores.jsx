import React from "react";

const FrameScore = (props) => {
  console.log(props);
  if (props.frameNumber === 9) {
    return (
      <div className="lastFrame">
        <div className="bowlOne">
          {/* {props.bowlOne} */}
          One
        </div>
        <div className="bowlTwo">
          {/* {props.bowlTwo} */}
          Two
        </div>
        <div className="bowlThree">
          {/* {props.bowlThree} */}
          Three
        </div>
      </div>
    )
  } else {
    return (
      <div className="notLastFrame">
        <div className="bowlOne">
          {/* {props.bowlOne} */}
          One
        </div>
        <div className="bowlTwo">
          {/* {props.bowlTwo} */}
          Two
        </div>
      </div>
    )
  }
};

export default FrameScore;
