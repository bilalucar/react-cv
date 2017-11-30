import React, { Component } from 'react';


class Projects extends Component {
  render() {
    return (
      <div className="item">
          <span className="project-title"><a href="{this.props.item.link}" target="_blank">{this.props.item.title}</a></span> -
          <span className="project-tagline">{this.props.item.tagline}</span>
      </div>
    );

  }
}

export default Projects;
