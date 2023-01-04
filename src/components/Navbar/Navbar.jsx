import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu(prevStateMenu => !prevStateMenu)
  }

  const MenuList = ({ classN }) => {
    return (
      <ul className={classN}>
        <li className="p__opensans">
          <a href="#home" onClick={toggleMenuHandler}>Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about" onClick={toggleMenuHandler}>About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu" onClick={toggleMenuHandler}>Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards" onClick={toggleMenuHandler}>Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact" onClick={toggleMenuHandler}>Contact</a>
        </li>
        <li className='p__opensans d-hide'>
          <a href="/" onClick={toggleMenuHandler}>Book Table</a>
        </li>
        <li className='p__opensans d-hide'>
          <a href="#login" onClick={toggleMenuHandler}> Login / Register </a>
        </li>
      </ul>
    )
  }

  return (
    <nav className='app__navbar'>

      <div className="app__navbar-logo">
        <a href="#home">
          <img src={images.gericht} alt="app logo" />
        </a>
      </div>
      <MenuList classN='app__navbar-links' />
      <div className="app__navbar-login">
        <a href="#login" className='p__opensans d-none'>Login / Register</a>
        <div />
        <a href="/" className='p__opensans d-none'>Book Table</a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#f0f8ff' fontSize={27} className="overlay__show" onClick={toggleMenuHandler} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={toggleMenuHandler} />

            <MenuList classN='app__navbar-smallscreen_links' />
          </div>
        )}

      </div>
    </nav>
  )

};

export default Navbar;
