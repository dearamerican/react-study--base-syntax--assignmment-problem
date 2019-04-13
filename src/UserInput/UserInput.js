import React from 'react';
import './UserInput.css'

const userInput = (props) => {
  const inputStyle = {
    display: 'inline-block',
    padding: '5px',
    marginLeft: '10px',
  };
  return (
    <div className="UserInput">
      <label>Change User Name:</label>
      <input style={inputStyle} type="text" onChange={props.change} value={props.username}/>
    </div>
  );
};

export default userInput;