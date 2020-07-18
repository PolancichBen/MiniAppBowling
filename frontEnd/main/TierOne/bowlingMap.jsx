import React from 'react';
import Frame from './TierTwo/frame.jsx'



const BowlingMap = (props) =>{
  props.frames.map((frame,i)=>{
    <div key={i}>
      <Frame frame={frame}/>
    </div>
  })
}

export default BowlingMap;