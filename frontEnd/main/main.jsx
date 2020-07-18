import React from 'react';
import BowlingMap from './TierOne/bowlingMap.jsx';
import BowlingTotal from './TierOne/total.jsx';
import ResetGame from './TierOne/resetGame.jsx';
import EnterScore from './TierOne/enterScore.jsx';

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      currentFrame: 0,
      F1B1:0,
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
      firstBowl: false,
      TenthFrameThirdBowl: false,
      TotalScore: 0,
      strike: false,
      spare: false,
      numberToSaveAsFrameFirstNumber: null,
      numberToSaveAsFrameSecondNumber: null,
      numberToSaveAsFrameThirdNumber: null,
    }
    this.KeypadNumberKeyHandler = this.KeypadNumberKeyHandler.bind(this);
  }

  frameHandler(currentFrame,KeyPadNumber){
    if (this.state.firstBowl === false){
      console.log('Number saved as First Option', this.state.numberToSaveAsFirstFrameNumber)
      console.log('Frame',this.state.currentFrame,' Bowl 1')
      console.log('Need to set',this.state.frames[this.state.currentFrame].scores.bowlOne,'to',this.state.numberToSaveAsFirstFrameNumber)
      let BeginningSliceOfNewFrame = this.state.frames.slice(0,this.state.currentFrame);
      let currentFrame = [{ scores:{ bowlOne: this.state.numberToSaveAsFirstFrameNumber, bowlTwo: null,}, FrameScore: null }];
      let endingFrame = this.state.frames.slice(parseInt(this.state.currentFrame)+1,10);
      let newBuiltFrame = [BeginningSliceOfNewFrame,currentFrame,endingFrame].flat();
      console.log(newBuiltFrame)
      this.setState({
        firstBowl: true,
        frames: newBuiltFrame,
      })
    }
    if (this.state.firstBowl === true){
      console.log('Number saved as Second Option', this.state.numberToSaveAsFrameSecondNumber)
      console.log('Frame',this.state.currentFrame,' Bowl 2')
      console.log('Need to set',this.state.frames[this.state.currentFrame].scores.bowlTwo,'to',this.state.numberToSaveAsFrameSecondNumber)
      let BeginningSliceOfNewFrame = this.state.frames.slice(0,this.state.currentFrame);
      let currentFrame = [{ scores:{ bowlOne: parseInt(this.state.numberToSaveAsFirstFrameNumber), bowlTwo: parseInt(this.state.numberToSaveAsFrameSecondNumber)}, FrameScore: this.state.numberToSaveAsFrameFirstNumber+this.state.numberToSaveAsFrameSecondNumber}];
      let endingFrame = this.state.frames.slice(parseInt(this.state.currentFrame)+1,10);
      let newBuiltFrame = [BeginningSliceOfNewFrame,currentFrame,endingFrame].flat();
      console.log(newBuiltFrame)
      this.setState({
        firstBowl:false,
        frames: newBuiltFrame,
        currentFrame: parseInt(this.state.currentFrame)+1,
      })
      console.log('Next Frame Started',parseInt(this.state.currentFrame)+1)
    }
  }

    //have a counter
    //if 1 
    /*
    1 [1] = frameone bowl one
    1 [2]
    2 [1]
    2 [2]
    3 [1]
    3 [2]

    current frame is ---
    2

    if firstbowl is false
      set bowlOne with value
        > set state
        > firstBowl is true
    else
      set bowlTwo with value
      set firstBowl is false
      frame++
    


    */

  KeypadNumberKeyHandler(event){
    if (typeof event === 'number'){
      if (this.state.firstBowl === false){
        this.setState({
          numberToSaveAsFirstFrameNumber: event
        })
      } else if (this.state.firstBowl === true) {
        this.setState({
          numberToSaveAsFrameSecondNumber: event
        })
      }
    }
    if (typeof event === 'string'){
      if (event === 'SEND'){
        this.frameHandler(this.state.currentFrame,event)
      }
      if (event === 'CANCEL'){
        this.setState({
          numberToSaveAsFrameNumber: null
        })
      }
    }
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