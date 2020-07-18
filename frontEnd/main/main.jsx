import React from 'react';
import BowlingMap from './TierOne/bowlingMap.jsx';
import BowlingTotal from './TierOne/total.jsx';
import ResetGame from './TierOne/resetGame.jsx';

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      frames:[
        { scores:{ bowlOne: null, bowlTwo: null,}, FrameScore: null },
        { scores:{ bowlOne: null, bowlTwo: null,}, FrameScore: null },
        { scores:{ bowlOne: null, bowlTwo: null,}, FrameScore: null },
        { scores:{ bowlOne: null, bowlTwo: null,}, FrameScore: null },
        { scores:{ bowlOne: null, bowlTwo: null,}, FrameScore: null },
        { scores:{ bowlOne: null, bowlTwo: null,}, FrameScore: null },
        { scores:{ bowlOne: null, bowlTwo: null,}, FrameScore: null },
        { scores:{ bowlOne: null, bowlTwo: null,}, FrameScore: null },
        { scores:{ bowlOne: null, bowlTwo: null,}, FrameScore: null },
        { scores:{ bowlOne: null, bowlTwo: null, bowlThree: null,}, FrameScore: null },
      ],
      TenthFrameThirdBowl: false,
      TotalScore: 0,
    }
  }

  strike (event){
   event.preventDefault();
  }

  spare(event){
    event.preventDefault();
  }

  render (){
    return (
      <div className="mainBowling">
        <div className="mainBowlingTotal">
          <BowlingTotal score={this.state.TotalScore}/>
        </div>
        <div className="mainBowlingMap">
          <BowlingMap frames={this.state.frames}/>
        </div>
        <div className="mainBowlingReset">
          <ResetGame />
        </div>
      </div>
    )
  }
}

export default Main;