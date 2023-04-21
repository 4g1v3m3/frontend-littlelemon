import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Nav.css';
import logo from "./assets/Logo.svg"
import hamburger from "./assets/Hamburger_menu.svg"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='Nav'>
      <div className="nav-container">
        <div className="nav-brand">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-menu-normal">
          <Link to="/" className='nav-item' >HOME</Link>
          <Link to="/about" className='nav-item' >ABOUT</Link>
          <Link to="/menu" className='nav-item' >MENU</Link>
          <Link to="/reservation" className='nav-item' >RESERVATION</Link>
          <Link to="/online" className='nav-item' >ORDER ONLINE</Link>
          <Link to="/login" className='nav-item' >LOGIN</Link>
        </div>
        <div className={`nav-menu ${isOpen ? "is-open" : ""}`}>
          <Link to="/" className='nav-item' onClick={toggleMenu}>HOME</Link>
          <Link to="/about" className='nav-item' onClick={toggleMenu}>ABOUT</Link>
          <Link to="/menu" className='nav-item' onClick={toggleMenu}>MENU</Link>
          <Link to="/reservation" className='nav-item' onClick={toggleMenu}>RESERVATION</Link>
          <Link to="/online" className='nav-item' onClick={toggleMenu}>ORDER ONLINE</Link>
          <Link to="/login" className='nav-item' onClick={toggleMenu}>LOGIN</Link>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          <img src={hamburger} alt="Menu" />
        </div>
      </div>
    </div>
  )
}

export default Nav;
