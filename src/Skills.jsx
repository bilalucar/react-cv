import React, { Component } from 'react';


class Skills extends Component {
  render() {
    return (
    <div className="item">
        <h3 className="level-title">{this.props.item.ad}</h3>
        <div className="level-bar">
            <div className="level-bar-inner" data-level={this.props.item.yuzde}>
            </div>
        </div>
    </div>
    );

  }
}

export default Skills;
