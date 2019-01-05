import React, { Component } from 'react';
import Numbering from './components/Numbering';
import Dial from './components/Dial';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: '',
      isCalling:false,
    }
  }

  receiveValue=(e)=>{
    let {value} = this.state;
    value += e;
    this.setState({
      value
    });
  }
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  handleInput = event => {
    const { value } = event.target;
    this.setState({value});
    console.log(event.target);
  }

  handleKeyDown = e => {
    let { value } = this.state;

    if (!isNaN(parseInt(e.key))) {
      value += e.key;
      this.setState({ value });
      console.log(!isNaN(parseInt(e.key)));
    }
    else if(e.keyCode === 8){  
      value = value.substring(0,value.length-1);
      this.setState({
        value
      })
    }
  };

  setCalling=(setCalling)=>{
    this.setState({
      isCalling:setCalling
    });
  }

  render() {
    var {value,isCalling}=this.state;
    var elmCalling = !isCalling
    ?<Numbering  
          onReceiveValue = {this.receiveValue}
          onSetCalling = {this.setCalling}
    />
    :<Dial status={isCalling}/>
    return (
    	<div className="container-fluid call-phone">
        {/* Numbering onClickCall={} */}
        {/* Calling  */}
    		<div type="text" name="name" id="inputName" className="form-control">{value}</div>

        {elmCalling}

    	</div>
    );
  }
}

export default App;
