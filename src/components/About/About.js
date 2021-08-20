import React from 'react';
import logoJavascript from '../../images/Javascript-shield.png'
import logoHTML from '../../images/HTML5.png'
import logoReact from '../../images/REACT.png'
import logoRedex from '../../images/Redux.png'
import logoCSS from '../../images/css.png'
import './About.css'

export default function About() {
  return (
    <div className="about">
      <h2 className=""> About</h2>
      <h3>This is a web page created with the following technologies</h3>
      <div className="containerTec">
        <div className="tecno">
          <h4 >✔ Javascript</h4>
          <img src={logoJavascript} width="50" height="50" alt="Logo" />
        </div>
        <div className="tecno">
          <h4>✔ HTML</h4>
          <img src={logoHTML} width="45" height="45" alt="Logo" />
        </div>
        <div className="tecno">
          <h4>✔ React</h4>
          <img src={logoReact} width="55" height="55" alt="Logo" />
        </div>
        <div className="tecno">
          <h4>✔ Redux</h4>
          <img src={logoRedex} width="60" height="60" alt="Logo" />
        </div>
        <div className="tecno">
          <h4>✔ CSS (Responsive)</h4>
          <img src={logoCSS} width="55" height="55" alt="Logo" />
        </div>
      </div>
      <h3 className="linkRepo">Link to repository</h3>
      <a className="link" href="https://github.com/Marco5X/AppMovies" ><>👉🏼</> Here</a>
    </div>
  )
}