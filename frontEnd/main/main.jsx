import React from 'react';
import BowlingMap from './TierOne/bowlingMap.jsx';
import BowlingTotal from './TierOne/total.jsx';
import ResetGame from './TierOne/resetGame.jsx';
import EnterScore from './TierOne/enterScore.jsx';

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
      strike: false,
      spare: false,
    }
    this.KeypadNumberKeyHandler = this.KeypadNumberKeyHandler.bind(this);
  }

  KeypadNumberKeyHandler(event){
    console.log(event)
    // console.log(event.target)
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
        <div className="mainBowlingEnterScore">
          <EnterScore KeypadNumberKeyPress={this.KeypadNumberKeyHandler}/>
        </div>
      </div>
    )
  }
}

export default Main;