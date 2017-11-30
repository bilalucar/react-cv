import React, { Component } from 'react';


class Education extends Component {
  render() {
    return (
    <div className="item">
        <h4 className="degree">{this.props.item.degree}</h4>
        <h5 className="meta">{this.props.item.meta}</h5>
        <div className="time">{this.props.item.time}</div>
    </div>

    );

  }
}

export default Education;
