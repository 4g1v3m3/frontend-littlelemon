import "./styles/Highlights.css"
import { useNavigate } from "react-router";
import Card from "./Card";
import menuItems from './MenuItems'

const Highlights = () => {
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/menu")
  }
  return (
    <div className="Highlights">
      <div className="highlights">
        <h1 className="highlights-title">This week specials!</h1>
        <div className="button-container">
          <button className="button" id="highlight-button" onClick={handleClick}>Browse Menu</button>
          </div>
      </div>
      <div className="cards-section">
        {menuItems
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map(menuItems => (
            <Card key={menuItems.id} menuItems={menuItems} />
        ))}
</div>
    </div>
  )
}

export default Highlights