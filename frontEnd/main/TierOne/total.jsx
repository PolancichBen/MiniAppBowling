import React from 'react';



const BowlingTotal = (props) =>{
  return (
    <div className="gameTotal">
      {props.score}
    </div>
  )
}

export default BowlingTotal;