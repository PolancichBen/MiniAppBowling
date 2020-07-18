import React from 'react';
import KeypadInformation from './TierTwo/keyPadInformation.jsx';
import KeypadKeys from './TierTwo/keyPadKeys.jsx';


const EnterScore = (props) =>{
  return (
    <div className="keyPadContainer">
      <div className="keyPadInformationMain">
        <KeypadInformation />
      </div>
      <div className="keyPadKeysMain">
        <KeypadKeys KeyPress={props.KeypadNumberKeyPress}/>
      </div>
    </div>
  )
}

export default EnterScore;