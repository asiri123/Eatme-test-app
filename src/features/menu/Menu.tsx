import React, { useEffect } from "react"
import {
  DeliveryDining,
  InfoOutlined,
  StarOutlineOutlined,
} from "@mui/icons-material"
import { Box, Grid } from "@mui/material"
import {
  Navbar,
  Footer,
  BackButton,
  CardItem,
  BucketItem,
  InfoButton,
  StartGroup,
  MenuHeader,
} from "../../components"
import { ImageFood1 } from "../../assests/"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchMenuItemList, selectMenuItemList } from "../menu/menuSlice"
import "./Menu.scss"

const Menu = () => {
  const foodItemList = useAppSelector(selectMenuItemList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchMenuItemList())
  }, [])

  return (
    <>
      <div className="menu-main-container">
        <div className="header-container">
          <MenuHeader />
        </div>
        <div className="divider" />
        <div className="back-btn-section">
          <BackButton />
        </div>
        <div className="product-des-section">
          <div className="image-container">
            <img src={ImageFood1}></img>
          </div>
          <div className="description-container">
            <div className="description-first">Tossed - St Martin's Lane</div>
            <div className="description-second">Chicken · Salads · Healthy</div>
            <div className="description-second-distance">
              0.20 miles away·Opens at 11:00 · £ 0.99 delivery · £ 7.00 minimum
            </div>
            <div className="info-button-container">
              <InfoButton
                icon={<InfoOutlined style={{ color: "#585c5c" }} />}
                mainText={"Info"}
                description={"Map allergens and hygene rating"}
              />
            </div>
            <div className="info-button-container">
              <InfoButton
                icon={<StarOutlineOutlined style={{ color: "green" }} />}
                mainText={"4.7 Excellent Info"}
                description={"see all 500 reviews"}
              />
            </div>
          </div>
          <div className="deliver-container">
            <div className="first-row-details">
              <DeliveryDining />
              Deliver
              <div className="change-text">Change</div>
            </div>
            <StartGroup />
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
            <div>
              {foodItemList.map((data) => (
                <div>
                  <div className="category-text-container">{data.category}</div>
                  {data.items.map((item) => (
                    <Box sx={{ width: "100%" }}>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={6} md={6}>
                          <CardItem
                            foodItem={item.mainText}
                            description={item.description}
                            price={item.price}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="your-basket-section">
            <BucketItem />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Menu
