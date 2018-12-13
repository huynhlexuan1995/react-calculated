import React, { Component } from 'react';
import './App.css';
import Numbers from './components/Numbers';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: '',
      isOpen:false
    }
  }

  receiveValue= (value) => {
    this.setState({
      value
    })
  }
  render() {
    return (
      <div className="App">
        <div className="app-top">
          <div className="top-time">
            <p>Call Time: 00:00:00</p>
          </div>
          <input type="text" name="number" id="inputNumber" className="form-control" value={this.state.value}/>
        </div>
        <Numbers onReceiveValue = {this.receiveValue}/>
        <div className="main-bot">
          <button type="button" class="btn btn-success" id="btn-dial">Dial</button>
        </div>
      </div>
    );
  }
}

export default App;
