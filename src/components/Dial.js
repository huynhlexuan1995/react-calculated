import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icon from '@fortawesome/free-solid-svg-icons'
import Runtime from './Runtime';
import Endcall from './Endcall';

// const SKIP_TIME = 5; // seconds

class Dial extends Component {
    constructor(props){
        super(props);
        this.state = {
            isCalling: this.props.status,
            isReceivingCall: false,
            callingTime: 0,
        }

        this.runtimeElement = React.createRef();
    }

    onClickStopCalling = () => {
        this.runtimeElement.current.stopTick();
        let value = this.runtimeElement.current.tick();
        this.setState({
            callingTime:value,
            isCalling:!this.props.status
        });
        console.log(this.props.status);
    }

    render() {
        var {callingTime,isCalling} = this.state;
        
        var elmEndcall = isCalling
        ?<div>
            <Runtime 
            ref={this.runtimeElement}
            startTime={Date.now()} 
            isReceivingCall={this.state.isReceivingCall}
            />
            <div className="hangup-call">
                <div className="Dial">
                    <div className="col-5 screen-2">
                        <div className="fa mute">
                            <FontAwesomeIcon icon={Icon.faMicrophoneAltSlash} />
                        </div>
                        <div className="fa show-board">
                            <FontAwesomeIcon icon={Icon.faTh} />
                        </div>
                        <div className="fa speaker">
                            <FontAwesomeIcon icon={Icon.faVolumeUp} />
                        </div>
                        <div className="fa add-call">
                            <FontAwesomeIcon icon={Icon.faPhone}/>
                        </div>
                        <div className="fa sim-card">
                            <FontAwesomeIcon icon={Icon.faSimCard}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hangup-off">
                <button className="hangup" 
                        onClick={this.onClickStopCalling}
                        >
                    <FontAwesomeIcon icon={Icon.faPhoneSlash}/>
                </button>
            </div>
        </div>
        :<Endcall value={callingTime}
        />
        return (
            <div>
        		{elmEndcall}
            </div>   
        );
    }
}

export default Dial;
