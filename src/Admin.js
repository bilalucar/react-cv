import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Language from "./Language";
import Education from "./Education";
import * as firebase from 'firebase';

class Admin extends Component {
  constructor(){
    super();
    this.state = {
      bilgi: {
        "Experiences" : [],
        "Projects" : [],
        "Skills" : [
          {
            "ad" : "JavaScript",
            "yuzde" : "80%"
          },
          {
            "ad" : "PHP",
            "yuzde" : "50%"
          },
          {
            "ad" : "Java",
            "yuzde" : "75%"
          },
          {
            "ad" : "Wordpress",
            "yuzde" : "98%"
          }
        ],
        "Language" : [],
        "Education" : []
      }

    };
  }

  componentWillMount(){
    const rootRef = firebase.database().ref();
    rootRef.on('value', snap => {
      this.setState({
        bilgi: snap.val()
      });
    });
  }

  render() {
    return (
      <div className="wrapper">
          <div className="sidebar-wrapper">
              <div className="profile-container">
                  <img className="profile" src={this.state.bilgi.image} alt=""
                  width="100px" height="100px"/>
                  <h1 className="name">{this.state.bilgi.name}</h1>
                  <h3 className="tagline">Web Developer</h3>
              </div>

              <div className="contact-container container-block">
                  <ul className="list-unstyled contact-list">
                      <li className="email"><i className="fa fa-envelope"></i><a href={"mailto:" +  this.state.bilgi.email}>{this.state.bilgi.email}</a></li>
                      <li className="phone"><i className="fa fa-phone"></i><a href={this.state.bilgi.phone}>{this.state.bilgi.phone}</a></li>
                      <li className="website"><i className="fa fa-globe"></i><a href={this.state.bilgi.website} target="_blank">{this.state.bilgi.website}</a></li>
                      <li className="twitter"><i className="fa fa-twitter"></i><a href={this.state.bilgi.twitterlink} target="_blank">{this.state.bilgi.twitter}</a></li>
                  </ul>
              </div>
              <div className="education-container container-block">
                  <h2 className="container-block-title">Eğitim</h2>
                  {this.state.bilgi.Education.map((item,key) => <Education item={item} key={key} />)}
              </div>

              <div className="languages-container container-block">
                  <h2 className="container-block-title">Diller</h2>
                  <ul className="list-unstyled interests-list">
                    {this.state.bilgi.Language.map((item,key) => <Language item={item} key={key} />)}
                  </ul>
              </div>

              <div className="interests-container container-block">
                  <h2 className="container-block-title">İlgiler</h2>
                  <ul className="list-unstyled interests-list">
                      <li>Bilardo</li>
                      <li>Masa Tenisi</li>
                  </ul>
              </div>

          </div>

          <div className="main-wrapper">

              <section className="section summary-section">
                  <h2 className="section-title"><i className="fa fa-user"></i>Kariyer Profili</h2>
                  <div className="summary">
                      <p>Süleyman Demirel Üniversitesi Bilgisayar Mühendisliği 4.sınıf öğrencisiyim.</p>
                  </div>
              </section>

              <section className="section experiences-section">
                  <h2 className="section-title"><i className="fa fa-briefcase"></i>Deneyimler</h2>

                {this.state.bilgi.Experiences.map((item,key) => <Experience item={item} key={key} />)}

              </section>

              <section className="section projects-section">
                  <h2 className="section-title"><i className="fa fa-archive"></i>Projeler</h2>
                  <div className="intro">
                      <p>Yaptığım projeleri incelemek için projenin üzerine tıklayın.</p>
                  </div>
                  {this.state.bilgi.Projects.map((item,key) => <Projects item={item} key={key} />)}
              </section>

              <section className="skills-section section">
                  <h2 className="section-title"><i className="fa fa-rocket"></i>Yeterlilikler & Beceriler</h2>
                  <div className="skillset">
                  {this.state.bilgi.Skills.map((item,key) => <Skills item={item} key={key} />)}

                  </div>
              </section>

          </div>
      </div>
    );
  }
}

export default Admin;
