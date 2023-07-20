import "./Header-Style.scss"
import Divider from "@mui/material/Divider"
import MenuBtn from "../buttons/MenuBtn"
import SignupBtn from "../buttons/SignupBtn"
import Mainlogo from "../buttons/Main-logo"

const Header = () => {
  return (
    <div className="app-main-container">
      <div className="logo-container">
        <Mainlogo />
      </div>
      <div className="right-icon-container">
        <div className="signup-btn">
          <SignupBtn />
        </div>
        <MenuBtn />
      </div>
      <Divider />
    </div>
  )
}

export default Header
