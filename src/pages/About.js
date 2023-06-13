import React, { Component } from 'react';
import "./About.css";
import IMG_8044 from ".../assets/IMG_8044";
export default class About extends Component {
  render() {
    return (
      <div>
    <div className="split left">
      <div className="centered">
        <img 
          className="profile_image"
          // Image goes here
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Paige Moore</div>
        <div className="brief_description">
          Hello! My name is Paige Moore and I am a rising senior at Cal Poly Pomona! I am a student athlete for my school
          being on the cross country and track team! I am majoring in computer science, however, I am still relatively new 
          to everything since I switched majors. I enjoy anime, manga, video games, traveling, hiking, cooking, and reading!
          I am excited to see what I can learn as a computer science major so  can help change our computing world!
        </div>
      </div>
    </div>
  </div>
        
    )
  }
}