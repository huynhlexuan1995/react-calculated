import React, { Component } from 'react';
import { Provider, withTime } from "../contexts/Timeout";

class Runtime extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      startTime: Date.now(),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date()
    });
  }
  render() {
    let seconds = Math.round((this.state.time - this.props.startTime)/1000).toFixed(0).toLocaleString();
    let minute = (seconds - seconds % 60) / 60;
    let hour = (minute - minute%60)/60;
    let secondClock = seconds - minute*60;
    let minuteClock = minute - hour*60;

    return (
      <Provider
        value={{
          showTime: () => {
            return 1999;
          },
        }}
      >
        <div className="App-clock">
          Call Time: {('0'+hour).slice(-2)}:{('0'+minuteClock).slice(-2)}:{('0'+secondClock).slice(-2)}
        </div>
      </Provider>
    );
  }
}

export default withTime(Runtime);
