import React, { Component } from 'react';
import './App.css';
import Numbers from './components/Numbers';
import Dial from './components/Dial';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: '',
    };
  }

  receiveValue = (receiveValue) => {
    let { value } = this.state;
    value += receiveValue;
    this.setState({
      value
    });
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = e => {
    let { value } = this.state;
    if (!isNaN(parseInt(e.key))) {
      value += e.key;
      this.setState({ value });
      console.log(value);
    }
    else if(e.keyCode === 8){
      value = parseInt(value/10);
      this.setState({
        value
      })
    }
    //console.log(!isNaN(parseInt(e.key)));
  };

  render() {
    const {value}=this.state;
    return (
      <div className="App">
        <div className="app-top">
          <div className="top-time">
            <p>Call Time: 00:00:00</p>
          </div>
           <div className="screen" id="inputNumber">{value}</div>
        </div>
        <Numbers onReceiveValue = {this.receiveValue}/>
        <Dial/>
      </div>
    );
  }
}

export default App;
