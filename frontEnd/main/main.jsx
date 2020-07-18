import React from 'react';
import BowlingMap from './TierOne/bowlingMap.jsx';
import BowlingTotal from './TierOne/total.jsx';
import ResetGame from './TierOne/resetGame.jsx';

class Main extends React.Component{
  constructor(props){
    super(props)
    this.state ={

    }
  }

  render (){
    return (
      <div>
        Hooked Up
        <div>
          <BowlingMap />
        </div>
      </div>
    )
  }
}

export default Main;