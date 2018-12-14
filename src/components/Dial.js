import React, { Component } from 'react';

class Dial extends Component {

  state = {
    isOpen: false
  }

  changeStatus=()=>{
    this.setState({
      isOpen : !this.state.isOpen
    })
  }

  render() {
    const {isOpen} = this.state;
    return (
      <div className={`main-bot ${isOpen ? 'open' : ''}`}>
        <button 
          type="button" className="btn btn-success"
          id={`${isOpen ?'btn-hangup':'btn-dial'}`} 
          onClick={this.changeStatus} >{isOpen ? 'Hangup' : 'Dial'}
        </button>
      </div>
    );
  }
}

export default Dial;
