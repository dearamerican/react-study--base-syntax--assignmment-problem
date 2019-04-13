import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';


class App extends Component {
  state = {
    username: 'Rachel'
  };

  eventHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput username={this.state.username} change={this.eventHandler}/>
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;


// ======================================= ALTERNATIVE SYNTAX:

// class App extends Component {
//   constructor() {
//     super(); //NOTE: No this before super.
//     this.state = {
//       username: 'Rachel'
//     };

//     this.eventHandler = (event) => {
//       this.setState({
//         username: event.target.value
//       });
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <UserInput username={this.state.username} change={this.eventHandler}/>
//         <UserOutput username={this.state.username} />
//         <UserOutput username={this.state.username} />
//       </div>
//     );
//   }
// }

// export default App;

