import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isOn: false
      };
   }
   toggle = () => {
      this.setState({isOn: !this.state.isOn})
   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           <h2>Welcome to React</h2>
           <MyComponent name="Kyle"/>
        </header>
         <button onClick={this.toggle}>
            {this.state.isOn ? 'On' : 'Off' }
         </button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
