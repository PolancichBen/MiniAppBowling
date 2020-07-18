import React from "react";
import FrameScore from "./TierThree/frameScores.jsx";
import FrameTotal from "./TierThree/frameTotal.jsx";

const Frame = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <FrameScore bowls={props.frame.scores} frameNumber={props.frameNum}/>
      </div>
      <div>
        <FrameTotal score={props.frame.FrameScore}/>
      </div>
    </div>
  );
};

export default Frame;
