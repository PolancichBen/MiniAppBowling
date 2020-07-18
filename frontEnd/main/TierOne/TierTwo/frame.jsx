import React from "react";
import FrameScore from "./TierThree/frameScores.jsx";
import FrameTotal from "./TierThree/frameTotal.jsx";

const Frame = (props) => {
  console.log(props);
  return (
    <div className="EachFrame">
      <div className="EachFrameScoreContainer">
        <FrameScore bowls={props.frame.scores} frameNumber={props.frameNum}/>
      </div>
      <div className="EachFrameTotalContainer">
        <FrameTotal score={props.frame.FrameScore} frameNumber={props.frameNum}/>
      </div>
    </div>
  );
};

export default Frame;
