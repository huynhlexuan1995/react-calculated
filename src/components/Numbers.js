import React, { Component } from 'react';

let value = '';
class Numbers extends Component {


changeNumber = (e) => {
	value += e.target.name;
	this.props.onReceiveValue(value)
}

  render() {
    return (
      <div className="app-main">
          <div className="row">
            <div className="col-xs-6 col-sm-4 my-btn">
              <button type="button" className="btn btn-number" name="1" onClick={this.changeNumber}>1</button>
            </div>
            <div className="col-xs-6 col-sm-4 my-btn">
              <button type="button" className="btn btn-number" name="2" onClick={this.changeNumber}>2</button>
            </div>
            <div className="col-xs-6 col-sm-4 my-btn">
              <button type="button" className="btn btn-number" name="3" onClick={this.changeNumber}>3</button>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6 col-sm-4 my-btn">
              <button type="button" className="btn btn-number" name="4" onClick={this.changeNumber}>4</button>
            </div>
            <div className="col-xs-6 col-sm-4 my-btn">
              <button type="button" className="btn btn-number" name="5" onClick={this.changeNumber}>5</button>
            </div>
            <div className="col-xs-6 col-sm-4 my-btn">
              <button type="button" className="btn btn-number" name="6" onClick={this.changeNumber}>6</button>
            </div>
           
          </div>

          <div className="row">
            <div className="col-xs-6 col-sm-4 my-btn">
              <button type="button" className="btn btn-number" name="7" onClick={this.changeNumber}>7</button>
            </div>
            <div className="col-xs-6 col-sm-4 my-btn">
              <button type="button" className="btn btn-number" name="8" onClick={this.changeNumber}>8</button>
            </div>
            <div className="col-xs-6 col-sm-4 my-btn">
              <button type="button" className="btn btn-number" name="9" onClick={this.changeNumber}>9</button>
            </div>
           
          </div>
          <div className="row">
            <div className="col-xs-6 col-sm-4 my-btn">
              <button type="button" className="btn btn-number" name="*" onClick={this.changeNumber}>*</button>
            </div>
            <div className="col-xs-6 col-sm-4 my-btn">
              <button type="button" className="btn btn-number" name="0" onClick={this.changeNumber}>0</button>
            </div>
            <div className="col-xs-6 col-sm-4 my-btn">
              <button type="button" className="btn btn-number" name="#" onClick={this.changeNumber}>#</button>
            </div>
          </div>

        </div>
    );
  }
}

export default Numbers;
