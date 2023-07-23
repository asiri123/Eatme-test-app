import React from "react"
import "./BucketItem.scss"
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined"

const BucketItem = () => {
  return (
    <div className="basket-card">
      <div className="icon-bascket">
        <ShoppingBasketOutlinedIcon />
      </div>
      <div className="icon-description">Your Bascket is Empty</div>
      <div className="button-class">
        <div className="button-class-styles">Go to checkout</div>
      </div>
    </div>
  )
}

export default BucketItem
