import React from 'react';
import KeypadInformation from './TierTwo/keyPadInformation.jsx';
import KeypadKeys from './TierTwo/keyPadKeys.jsx';


const EnterScore = (props) =>{
  return (
    <div>
      <div>
        <KeypadInformation />
      </div>
      <div>
        <KeypadKeys />
      </div>
    </div>
  )
}

export default EnterScore;