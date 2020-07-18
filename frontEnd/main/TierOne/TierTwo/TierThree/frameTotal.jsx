import React from 'react';



const FrameTotal = (props) =>{
  console.log(props)
  return(
    <div className="InnerFrameTotal">
      frame {props.frameNumber} total
    </div>
  )

}

export default FrameTotal;