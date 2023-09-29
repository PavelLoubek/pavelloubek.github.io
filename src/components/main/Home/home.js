import React from 'react';
import './home.css';
import linkedInLogo from '../../../images/linkedInHomeLogoLight.png';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section id="homeSection">
      <p className="hello">Hello!</p>
      <p className="myNameIs">My name is <span className="name">Pavel Loubek</span></p>
      <p className="doStuff">and I do various stuff from IT!</p>
      <a href="https://www.linkedin.com/in/pavelloubek/"><img src={linkedInLogo} alt="LinkedIn" className="linkedInLogo"/></a>
      <br/>
      {/*<Link className='navbarScrollToBtn'>More info below!</Link>*/}
    </section>
  );
}

export default Home;