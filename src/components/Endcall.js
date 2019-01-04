import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icon from '@fortawesome/free-solid-svg-icons'
class Endcall extends Component {
  
  render() {
    const seconds = this.props.value;
    let minute = (seconds - seconds % 60) / 60;
    let hour = (minute - minute%60)/60;
    let secondClock = seconds - minute*60;
    let minuteClock = minute - hour*60;

    if(seconds>=0){
      return (
      <div>
      <div className="run-time">
          <div className="row time-call">
            <div className="col-5 runtime">
              Call Time: {('0'+hour).slice(-2)}:{('0'+minuteClock).slice(-2)}:{('0'+secondClock).slice(-2)}
            </div>
          </div>
        </div>
        <div className="hangup-call">
          <div className="Dial">
            <div className="col-5 screen-2">
              <div className="fa mute">
                <FontAwesomeIcon icon={Icon.faBan} />
              </div>
              <div className="fa show-board">
                <FontAwesomeIcon icon={Icon.faBell} />
              </div>
              <div className="fa speaker">
                <FontAwesomeIcon icon={Icon.faCommentAlt} />
              </div>
              <div className="fa add-call">
                <FontAwesomeIcon icon={Icon.faPhone}/>
              </div>
              <div className="fa sim-card">
                <FontAwesomeIcon icon={Icon.faVideo}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    else{
        return (
      <div>
      <div className="run-time">
          <div className="row time-call">
            <div className="col-5 runtime">
              Call Time: 00:00:00
            </div>
          </div>
        </div>
        <div className="hangup-call">
          <div className="Dial">
            <div className="col-5 screen-2">
              <div className="fa mute">
                <FontAwesomeIcon icon={Icon.faBan} />
              </div>
              <div className="fa show-board">
                <FontAwesomeIcon icon={Icon.faBell} />
              </div>
              <div className="fa speaker">
                <FontAwesomeIcon icon={Icon.faCommentAlt} />
              </div>
              <div className="fa add-call">
                <FontAwesomeIcon icon={Icon.faPhone}/>
              </div>
              <div className="fa sim-card">
                <FontAwesomeIcon icon={Icon.faVideo}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    }
  }
}

export default Endcall;
