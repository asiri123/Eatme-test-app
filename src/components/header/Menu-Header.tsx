import { Search } from "@mui/icons-material"
import MenuBtn from "../buttons/MenuBtn"
import Mainlogo from "../buttons/Main-logo"

import "./Menu-Header.scss"

const MenuHeader: React.FC = () => {
  return (
    <div className="main-menu-contanier">
      <div className="logo-menu-comtainer">
        <Mainlogo />
      </div>
      <div className="searchbar-container">
        <div className="searchbar">
          <Search />
          Search Tossed - St.Martin's Lane
        </div>
      </div>
      <div className="menuicon-container">
        <MenuBtn />
      </div>
    </div>
  )
}

export default MenuHeader
