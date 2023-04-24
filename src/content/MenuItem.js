import "./styles/MenuItem.css"
import add from "./assets/Basket.svg"
import { useNavigate } from "react-router"

const MenuItem = ({menuItems}) => {
  return (
    <div className="menu-item-container">
      <div className="menu-item-image-container" style={{
      backgroundImage: `url(${menuItems.img})`
    }}>
      </div><div className="menu-item-info-block">
      <div className="menu-item-info">
        <p className="menu-item-dish-name">{menuItems.name}</p>
        <p className="menu-item-dish-price">${menuItems.price}</p>
      </div>
      <div className="menu-item-dish-desc">{menuItems.desc}</div>
      </div>
    </div>
  )
}

export default MenuItem