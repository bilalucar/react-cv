import React, { Component } from 'react';


class Language extends Component {
  render() {
    return (
      <li>{this.props.item.dil} <span className="lang-desc">({this.props.item.seviye})</span></li>


    );

  }
}

export default Language;
