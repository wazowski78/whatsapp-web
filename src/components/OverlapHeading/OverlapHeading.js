import React, { Component } from 'react';
import './OverlapHeading.css';

class OverlapHeading extends Component {
    handleBack(e) {
        if(this.props.hasOwnProperty('onBackClick') && typeof(this.props.onBackClick) === 'function') {
            this.props.onBackClick();
        }
    }

  render() {
    return (
        <div className="row OverlapHeading__heading">
            <div className="row OverlapHeading__main">
                <div onClick={(e) => this.handleBack(e)} className="col-sm-2 col-xs-2 OverlapHeading__back">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </div>
                <div className="col-sm-10 col-xs-10 OverlapHeading__title">
                    New Chat11@...
                </div>
            </div>
        </div>
    );
  }
}

export default OverlapHeading;
