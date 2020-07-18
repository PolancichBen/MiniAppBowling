import React from "react";
import FrameScore from "./TierThree/frameScores.jsx";
import FrameTotal from "./TierThree/frameTotal.jsx";

const Frame = (props) => {
  console.log(props);
  return (
    <div className="eachFrame">
      <div className="eachFrameScoreContainer">
        <FrameScore bowls={props.frame.scores} frameNumber={props.frameNum}/>
      </div>
      <div className="eachFrameTotalContainer">
        <FrameTotal score={props.frame.FrameScore} frameNumber={parseInt(props.frameNum) + 1}/>
      </div>
    </div>
  );
};

export default Frame;
