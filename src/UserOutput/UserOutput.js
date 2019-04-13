import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className="UserData">
      <p>User Name: {props.username}</p>
      <p>Password: AlwaysSunny</p>
    </div>
  );
}

export default userOutput;