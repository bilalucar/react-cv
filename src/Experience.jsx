import React, { Component } from 'react';


class Experience extends Component {
  render() {
    return (
      <div className="item">
          <div className="meta">
              <div className="upper-row">
                  <h3 className="job-title">{this.props.item.baslik}</h3>
                  <div className="time">{this.props.item.tarih}</div>
              </div>
              <div className="company">{this.props.item.lokasyon}</div>
          </div>
          <div className="details">
            {this.props.item.aciklama}
          </div>
      </div>


    );

  }
}

export default Experience;
