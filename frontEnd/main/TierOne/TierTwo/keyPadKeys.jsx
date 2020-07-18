import React from "react";

const KeypadKeys = (props) => {
  return (
    <div className="keyPadKeysHead">
      <div className="keyRow">
        <div onClick={(e)=>props.KeyPress(e)} className="keys">1</div>
        <div onClick={(e)=>props.KeyPress(e)} className="keys">2</div>
        <div onClick={(e)=>props.KeyPress(e)} className="keys">3</div>
      </div>
      <div className="keyRow">
        <div onClick={(e)=>props.KeyPress(e)} className="keys">4</div>
        <div onClick={(e)=>props.KeyPress(e)} className="keys">5</div>
        <div onClick={(e)=>props.KeyPress(e)} className="keys">6</div>
      </div>
      <div className="keyRow">
        <div onClick={(e)=>props.KeyPress(e)} className="keys">7</div>
        <div onClick={(e)=>props.KeyPress(e)} className="keys">8</div>
        <div onClick={(e)=>props.KeyPress(e)} className="keys">9</div>
      </div>
      <div className="keyRow">
        <div onClick={(e)=>props.KeyPress(e)} className="keyStrike">X</div>
        <div onClick={(e)=>props.KeyPress(e)} className="keys">0</div>
        <div onClick={(e)=>props.KeyPress(e)} className="keySpare">/</div>
      </div>
      <div className="sendCancelKeys">
        <div onClick={(e)=>props.KeyPress(e)} className="keySend">SEND</div>
        <div onClick={(e)=>props.KeyPress(e)} className="keyCancel">CANCEL</div>
      </div>
    </div>
  );
};

export default KeypadKeys;
