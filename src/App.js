import React, { Component } from 'react';
import './App.css';
import Numbers from './components/Numbers';
import Dial from './components/Dial';
import Runtime from './components/Runtime'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: '',
      isCalling: false,
      
    };
  }

  receiveValue = (receiveValue) => {
    let { value } = this.state;
    value += receiveValue;
    this.setState({
      value
    });
  }

  handleInput = event => {
    const { value } = event.target;
    this.setState({value});
    console.log(event.target);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = e => {
    let { value } = this.state;
    if (!isNaN(parseInt(e.key))) {
      value += e.key;
      this.setState({ value });

    }
    else if(e.keyCode === 8){
      value = parseInt(value/10);
      this.setState({
        value
      })
    }
    //console.log(!isNaN(parseInt(e.key)));
  };

  setCalling=(setcalling)=>{
    let {isCalling} = this.state;
    isCalling = setcalling;
    this.setState({
      isCalling
    });
    
  }

  render() {
    const {value,isCalling}=this.state;
    console.log(this.state);
    var elmRuntime = isCalling.isCalling
    ? <Runtime
        startTime = {Date.now()}
    />
    : 'Call Time: 00:00:00';
    return (
      <div className="App">
        <div className="app-top">
          <div className="top-time">
           {elmRuntime}
          </div>
           <div className="screen" id="inputNumber"
              onChange={this.handleInput}
           >{value}</div>
        </div>
        <Numbers onReceiveValue = {this.receiveValue}/>
        <Dial onSetCalling={this.setCalling}/>
      </div>
    );
  }
}

export default App;
