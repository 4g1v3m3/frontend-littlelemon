
import FooterNav from './FooterNav';
import "./styles/Footer.css"
import footerlogo from "./assets/footer_logo_2.png"

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="logo-container">
        <img src={footerlogo} alt="logo" className="footer-logo" />
        </div>
      <div className="footer-container">
      <FooterNav />
      </div>
      <div className="footer-info-container">
        <p className='footer-info'>Little Lemon Chicago</p>
        <p className='footer-info'>Newbie avenue 114/2</p>
        <p className="copyright">Little Lemon Restaurant 2023 ©</p></div>
    </div>
  )
}

export default Footer