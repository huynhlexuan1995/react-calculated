import React, { Component } from 'react';
import './App.css';
import Numbers from './components/Numbers';
import Dial from './components/Dial';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: '',
      status:false,
    };
  }

  receiveValue = (value) => {
    this.setState({
      value
    });
  }
  onKeyPressed(e){
    console.log(e.key);
  }
  render() {
    return (
      <div className="App">
        <div className="app-top">
          <div className="top-time">
            <p>Call Time: 00:00:00</p>
          </div>
          <input type="text" name="number" id="inputNumber" className="form-control"
          value={this.state.value}
          onKeyDown={this.onKeyPressed}
          />
        </div>
        <Numbers onReceiveValue = {this.receiveValue}/>
        <Dial/>
      </div>
    );
  }
}

export default App;
