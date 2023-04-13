import { Link } from 'react-router-dom';
import '../App.css';


const Nav = () => {
  return (
    <div className='Nav'>
      <nav className='nav'>
        <Link to="/" className='nav-item'>HOME</Link>
        <Link to="/about" className='nav-item'>ABOUT</Link>
        <Link to="/" className='nav-item'>MENU</Link>
        <Link to="/" className='nav-item'>RESERVATION</Link>
        <Link to="/" className='nav-item'>ORDER ONLINE</Link>
        <Link to="/" className='nav-item'>LOGIN</Link>
      </nav>
    </div>
  )
}

export default Nav