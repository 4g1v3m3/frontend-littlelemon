import "./styles/Card.css"
import add from "./assets/Basket.svg"
import { useNavigate } from "react-router"

const Card = ({menuItems}) => {
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/menu")
  }

  return (
    <div className="card-container">
      <div className="card-image-container" style={{
      backgroundImage: `url(${menuItems.img})`
    }}>
      </div>
      <div className="card-info">
        <p className="dish-name">{menuItems.name}</p>
        <p className="dish-price">${menuItems.price}</p>
      </div>
      <div className="dish-desc">{menuItems.desc}</div>
      <button className="add-button" onClick={handleClick}><img className="add-button-svg" src={add} /></button>
    </div>
  )
}

export default Card