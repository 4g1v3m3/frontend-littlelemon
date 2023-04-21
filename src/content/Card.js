import "./styles/Card.css"

const Card = ({menuItems}) => {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img src={menuItems.img} className="card-image"/>
      </div>
      <div className="card-info">
        <div className="dish-name">{menuItems.name}</div>
        <div className="dish-price">{menuItems.price}</div>
        <div className="dish-desc">{menuItems.desc}</div>
      </div>
    </div>
  )
}

export default Card