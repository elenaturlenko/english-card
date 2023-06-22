import React from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/image/Logo.png';

function Menu() {
  return (
        <div className="menu">
          <div className="menu__text">
            <Link to="/logo">
              <img src={Logo} alt="logo" />
            </Link>
            <div>English-cards</div>
          </div>
          <nav className="menu-links links">
              <ul className="links__ul">
              <li>
                  <Link to="/wordsList">Words List</Link>
              </li>
              <li>
                  <Link to="/game">Cards</Link>
              </li>
              </ul>
          </nav>
        </div>
  );
}
export default Menu;
