import React from 'react';
import './home.css';
import linkedInLogo from '../../../images/linkedInHomeLogoLight.png';
import { Link } from 'react-scroll';
import portraitPhoto from '../../../images/homePortraitSquare.png'

const Home = () => {
  return (
    <section id="homeSection">
      <div className="homeMainText">
        <div id="mainTextOnly">
          <p className="hello">Hello!</p>
          <p className="myNameIs">My name is <span className="homeName">Pavel Loubek</span></p>
          <p className="doStuff">and I do various stuff from IT!</p>
        </div>
        <a className="linkedInBtn" href="https://www.linkedin.com/in/pavelloubek/"><img src={linkedInLogo} alt="LinkedIn" className="linkedInHomeLogo"/></a>
        <Link className="sectionScrollTo">More info below!</Link>
      </div>
      <br/>
      <img src={portraitPhoto} alt="PortraitPhoto" className="homePortrait"/>
    </section>
  );
}

export default Home;