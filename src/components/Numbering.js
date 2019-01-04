import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icon from '@fortawesome/free-solid-svg-icons'

class Numbering extends Component {

    state = {
        isCalling:false
    }

    changeNumber=(e)=>{
        this.props.onReceiveValue(e.target.name);
    }

    onCalling=(e)=>{
        this.setState({
            isCalling:!this.state.isCalling
        },()=>{
            this.props.onSetCalling(this.state);
        });
    }


  render() {
    return (
    	<div className="number-bot">
            <div className="number">
                <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 nb">
                    <button type="button" className="btn-info" name="1" onClick={this.changeNumber}>1</button>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 nb">
                    <button type="button" className="btn-info"  name="2" onClick={this.changeNumber}>2</button>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 nb">
                    <button type="button" className="btn-info"  name="3" onClick={this.changeNumber}>3</button>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 nb">
                    <button type="button" className="btn-info"  name="4" onClick={this.changeNumber}>4</button>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 nb">
                    <button type="button" className="btn-info"  name="5" onClick={this.changeNumber}>5</button>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 nb">
                    <button type="button" className="btn-info"  name="6" onClick={this.changeNumber}>6</button>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 nb">
                    <button type="button" className="btn-info"  name="7" onClick={this.changeNumber}>7</button>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 nb">
                    <button type="button" className="btn-info"  name="8" onClick={this.changeNumber}>8</button>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 nb">
                    <button type="button" className="btn-info"  name="9" onClick={this.changeNumber}>9</button>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 nb">
                    <button type="button" className="btn-info"  name="*" onClick={this.changeNumber}>*</button>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 nb">
                    <button type="button" className="btn-info"  name="0" onClick={this.changeNumber}>0</button>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 nb">
                    <button type="button" className="btn-info"  name="#" onClick={this.changeNumber}>#</button>
                </div>
            </div>

            <div className="Dial">
                <div className="col-5">
                    <button type="button" id="btn-dial" className="btn btn-primary" onClick = {this.onCalling}><FontAwesomeIcon icon={Icon.faPhone}/></button>
                </div>
            </div>
        </div>
    );
  }
}

export default Numbering;
