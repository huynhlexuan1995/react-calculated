import React, { Component } from 'react';
import { Provider, withTime } from "../contexts/Timeout";

class Dial extends Component {

  state = {
    isOpen: false,
    isCalling:false,
    showTime:''
  }

  changeStatus=(e)=>{
    this.setState({
      isOpen : !this.state.isOpen,
      isCalling: !this.state.isCalling,
    }, () => {
      this.props.onSetCalling(this.state)
    });
    
  }

  render() {
    const {isOpen, isCalling} = this.state;

    console.log('dial props', typeof this.props)
    console.log('dial props', typeof this.props.showTime)
    console.log('dial props', this.props.showTime)
    console.log('dial props', this.props.showTime())


    return (
      <div className={`main-bot ${isOpen ? 'open' : ''}`}>
        <button 
          type="button" className="btn btn-success"
          id={`${isOpen ?'btn-hangup':'btn-dial'}`} 
          onClick={this.changeStatus} >{isOpen ? 'Hangup' : 'Dial'}
        </button>
        {isOpen? <button 
          type="button" 
          className="btn btn-default" 
          id ="btn-hangup"
          onClick={this.changeStatus}
          >Close</button>:''
        }
      </div>
    );
  }
}

export default withTime(Dial);
