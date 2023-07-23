import React from "react"
import { ImageFood2 } from "../../assests"
import "./CardStyle.scss"

interface CardItemProps {
  description: string
  price: number
  foodItem: string
}

const CardItem: React.FC<CardItemProps> = ({
  description,
  price,
  foodItem,
}: CardItemProps) => {
  return (
    <div className="main-card-container">
      <div className="card-description">
        <div className="main-header-text">{foodItem}</div>
        <div className="header-description">{description}</div>
        <div className="price-description">{price}</div>
      </div>
      <div className="card-image">
        <img src={ImageFood2} width={100} height={100}></img>
      </div>
    </div>
  )
}

export default CardItem
