import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbarMenu'>
            <Link className='navbarScrollToBtn'>Home</Link>
            <Link className='navbarScrollToBtn'>About me</Link>
            <Link className='navbarScrollToBtn'>Experience</Link>
            <Link className='navbarScrollToBtn'>Projects</Link>
            <Link className='navbarScrollToBtn'>Contact</Link>
        </div>
    </nav>
  );
}

export default Navbar;