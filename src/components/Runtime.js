import React, { Component } from 'react';

const caculateCallingTime = (currentTime, startTime) => {
  const callingTime = Math.round((currentTime - startTime)/1000);
  //
  return callingTime;
}

class Runtime extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      callingTime: 0,
      startTime: new Date(),
    };
  }

  componentDidMount() {
    
  }

  ///////////////////////////////////////////
  // componentWillReceiveProps (nextProps) //
  // this.props: props truoc do cua component
  // nextProps: props hien tai cua component
  ///////////////////////////////////////////
  

  componentWillReceiveProps(nextProps) {
    if (this.props.isReceivingCall === false && nextProps.isReceivingCall === true) {
      this.setState({
        startTime: new Date(),
      }, () => {
        this.startTick();
      })
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  startTick() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    const currentTime = new Date();
    this.setState(({ startTime }) => ({
      time: currentTime,
      callingTime: caculateCallingTime(currentTime, startTime),
    }));
    return this.state.callingTime;
  }

  stopTick() {
    clearInterval(this.intervalID);  
    // clear interval
    // return { time, callingTime }
  }

  render() {
    let seconds = Math.round((this.state.time - this.state.startTime)/1000).toFixed(0).toLocaleString();
    let minute = (seconds - seconds % 60) / 60;
    let hour = (minute - minute%60)/60;
    let secondClock = seconds - minute*60;
    let minuteClock = minute - hour*60;

    if(seconds>0){
      return (
      <div className="run-time">
        <div className="row time-call">
          <div className="col-5 runtime">
            Call Time: {('0'+hour).slice(-2)}:{('0'+minuteClock).slice(-2)}:{('0'+secondClock).slice(-2)}
          </div>
        </div>
      </div>
    )
    }
    else 
      return(
        <div className="run-time">
          <div className="row time-call">
            <div className="col-5 runtime">
              Call Time: 00:00:00
            </div>
          </div>
        </div>
      );
  }
}

export default Runtime;
