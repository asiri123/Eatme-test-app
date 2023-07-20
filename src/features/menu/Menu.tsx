import React from "react"
import Header from "../../components/header/Header"
import Backbtn from "../../components/buttons/Back-button"
import image1 from "../../assests/images/images.jpeg"
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining"
import Navbar from "../../components/navbar/Navbar"
import Startgroup from "../../components/buttons/Start-group"
import Footer from "../../components/footer/Footer"
import CardItem from "../../components/card/CardItem"
import "./Menu.scss"

const Menu = () => {
  return (
    <div className="menu-main-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="divider" />
      <div className="back-btn-section">
        <Backbtn />
      </div>
      <div className="product-des-section">
        <div className="image-container">
          <img src={image1}></img>
        </div>
        <div className="description-container">
          <div className="description-first">
            Tossed - St Martin's Lane
          </div>
          <div className="description-second">
            Chicken · Salads · Healthy
          </div>
          <div className="description-second-distance">
            
              0.20 miles away·Opens at 11:00 · £ 0.99 delivery · £ 7.00 minimum
            
          </div>
        </div>
        <div className="deliver-container">
          <div className="first-row-details">
            <DeliveryDiningIcon />
            Deliver
            <text className="change-text">Change</text>
          </div>
          <Startgroup />
        </div>
      </div>
      <div className="divider-two" />
      <div className="navbar-section">
        <Navbar />
      </div>
      <div className="divider" />
      <div className="item-container">
        <div className="item-section">
          <div className="item-first-text">
          Adults need around 2000 kcal a day
          </div>
          <CardItem />
        </div>
        <div className="your-basket-section"></div>
      </div>
      <div className="">
        <Footer/>
        
      </div>
    </div>
  )
}

export default Menu
