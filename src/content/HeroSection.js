import "./styles/HeroSection.css"
import { useNavigate } from "react-router";


const HeroSection = () => {
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/reservation")
  }
  return (
    <div className="HeroSection">
      <div className="hero-background">
        <div className="hero-content">
          <div className="hero-section">
            <h1 className="hero-title1">Little Lemon</h1>
            <h2 className="hero-title2">Chicago</h2>
            <p className="hero-desc">We are family owned Mediterranian restaurant, focused on a traditional recipes served with a modern twist.</p>
            <div className="button-hero-container" onClick={handleClick}>
              <button className="button" id="hero-button">
                Reserve table!
              </button>
            </div>
          </div>
          <div className="hero-section-image"></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection