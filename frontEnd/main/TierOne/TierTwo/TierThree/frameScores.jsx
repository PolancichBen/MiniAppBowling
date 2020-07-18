import React from "react";

const FrameScore = (props) => {
  console.log(props);
  if (props.frameNumber === 9) {
    return (
      <div>
        <div className="bowlOne">
          {/* {props.bowlOne} */}
          Bowl One
        </div>
        <div className="bowlTwo">
          {/* {props.bowlTwo} */}
          Bowl Two
        </div>
        <div className="bowlThree">
          {/* {props.bowlThree} */}
          Bowl Three
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className="bowlOne">
          {/* {props.bowlOne} */}
          Bowl One
        </div>
        <div className="bowlTwo">
          {/* {props.bowlTwo} */}
          Bowl Two
        </div>
      </div>
    )
  }
};

export default FrameScore;
