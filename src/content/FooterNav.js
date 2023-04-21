import "./styles/FooterNav.css"
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';


const FooterNav = () => {
  return (
    <div className="FooterNav">
      <nav className='footer-nav'>
        <div className="contact">
          <Link to="/" className='footer-nav-item'>HOME</Link>
          <Link to="/about" className='footer-nav-item'>ABOUT</Link>
          <Link to="/about" className='footer-nav-item'>CONTACT US</Link>
        </div>
        <div className="social">
          <SocialIcon className='twitter' url="https://twitter.com/" target="_blank" aria-label="Twitter" />
          <SocialIcon id='tiktok' url="https://tiktok.com/" target="_blank" />
          <SocialIcon id='instagram' url="https://instagram.com/" target="_blank" />
          <SocialIcon id='facebook' url="https://facebook.com/" target="_blank" />
        </div>
      </nav>
    </div>
  )
}

export default FooterNav