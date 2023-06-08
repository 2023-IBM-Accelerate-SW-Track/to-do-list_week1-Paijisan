import React, { Component } from 'react';
  
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
          
        </div>
      </div>
    </div>
  </div>
        
    )
  }
}