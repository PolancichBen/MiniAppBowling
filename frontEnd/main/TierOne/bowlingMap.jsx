import React from 'react';
import Frame from './TierTwo/frame.jsx'



const BowlingMap = (props) =>{
  return props.frames.map((frame,i)=>{
  return (
    <div key={i} className="eachFrameContainer">
      <Frame frame={frame} frameNum={i}/>
    </div>
    )
  })
}

export default BowlingMap;