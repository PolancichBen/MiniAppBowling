import React from "react";

const KeypadKeys = (props) => {
  return (
    <div className="keyPadKeysHead">
      <div className="keyRow">
        <div onClick={()=>props.KeyPress(1)} className="keys">1</div>
        <div onClick={()=>props.KeyPress(2)} className="keys">2</div>
        <div onClick={()=>props.KeyPress(3)} className="keys">3</div>
      </div>
      <div className="keyRow">
        <div onClick={()=>props.KeyPress(4)} className="keys">4</div>
        <div onClick={()=>props.KeyPress(5)} className="keys">5</div>
        <div onClick={()=>props.KeyPress(6)} className="keys">6</div>
      </div>
      <div className="keyRow">
        <div onClick={()=>props.KeyPress(7)} className="keys">7</div>
        <div onClick={()=>props.KeyPress(8)} className="keys">8</div>
        <div onClick={()=>props.KeyPress(9)} className="keys">9</div>
      </div>
      <div className="keyRow">
        <div onClick={()=>props.KeyPress('X')} className="keyStrike">X</div>
        <div onClick={()=>props.KeyPress(0)} className="keys">0</div>
        <div onClick={()=>props.KeyPress('/')} className="keySpare">/</div>
      </div>
      <div className="sendCancelKeys">
        <div onClick={()=>props.KeyPress('SEND')} className="keySend">SEND</div>
        <div onClick={()=>props.KeyPress('CANCEL')} className="keyCancel">CANCEL</div>
      </div>
    </div>
  );
};

export default KeypadKeys;
