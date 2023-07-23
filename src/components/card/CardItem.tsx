import React from "react"
import "./CardStyle.scss"
import image2 from "../../assests/images/images (11).jpeg"
3
interface CardItemProps {
  description: any,
  price: number
}

const CardItem: React.FC<CardItemProps> = ({description,price}: CardItemProps) => {
  return (
    <div className="main-card-container">
      <div className="card-description">
        <div className="main-header-text">wel come</div>
        <div className="header-description">{description}</div>
        <div className="price-description">{price}</div>
      </div>
      <div className="card-image">
        <img src={image2}></img>
      </div>
    </div>
  )
}

export default CardItem
