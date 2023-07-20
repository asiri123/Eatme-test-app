import React from "react"
import "./Footer.scss"
import AppleImg from "../../assests/images/apple-download.png"
import Google from "../../assests/images/googleplay-download.png"
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded"
import StormRoundedIcon from "@mui/icons-material/StormRounded"
import DownloadingRoundedIcon from "@mui/icons-material/DownloadingRounded"

const Footer = () => {
  const productList = [
    "Investors",
    "About us",
    "Takeaway",
    "More",
    "Newsroom",
    "Engineerig blog",
    "Design blog",
    "Gift Cards",
    "Careers",
    "Restaurant signup",
    "Become a rider",
    "Deliveroo Talent Directory",
  ]

  const legaiList = [
    "Terms and conditions",
    "privacy",
    "Cookies",
    "Modern Slavery Statement",
    "Tax Strategy",
    "Section 172 statement",
  ]

  const helpList = ["Contact", "FAQs", "Cuisines", "Brands"]
  return (
    <>
      <div className="footer-main-container">
        <div className="left-panel"/>
        <div className="content-container">
          <div className="discover-container">
            <div className="header-text">
              <text>Discover Deliveroo</text>
            </div>
            {productList.map((items) => (
              <div className="body-text">{items}</div>
            ))}
          </div>
          <div className="discover-container">
            <div className="header-text">
              <text>Legal</text>
            </div>
            {legaiList.map((items) => (
              <div className="body-text">{items}</div>
            ))}
          </div>
          <div className="discover-container">
            <div className="header-text">
              <text>Help</text>
            </div>
            {helpList.map((items) => (
              <div className="body-text">{items}</div>
            ))}
          </div>
          <div className="discover-container">
            <div className="header-text">
              <text>Take Deliveroo with you</text>
            </div>
          </div>
        </div>

        <div className="left-panel"></div>
      </div>
      <div className="social-media-container">
        <FacebookRoundedIcon style={{ color: "white" }} />
        <StormRoundedIcon style={{ color: "white" }} />
        <DownloadingRoundedIcon style={{ color: "white" }} />
      </div>
    </>
  )
}

export default Footer
