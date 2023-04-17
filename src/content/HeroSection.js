import "./styles/HeroSection.css"


const HeroSection = () => {
  return (
    <div className="HeroSection">
      <div className="hero-background"></div>
      <div className="hero-content">
        <div className="hero-section">
          <h1 className="hero-title1">Little Lemon</h1>
          <h2 className="hero-title2">Chicago</h2>
          <p className="hero-desc">We are family owned Mediterranian restaurant, focused on a traditional recipes served with a modern twist.</p>
          <div>Button here</div>
        </div>
        <div className="hero-section-image"></div>
      </div>
    </div>
  )
}

export default HeroSection