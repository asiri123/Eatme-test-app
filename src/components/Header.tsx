import React from "react";
import "../styles/Header-Style.scss";
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';
import MenuIcon from "@mui/icons-material/Menu";
import CottageIcon from "@mui/icons-material/Cottage";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";

const Header = () => {
  return (
    <div className="app-main-header">
      <div className="header-content">
        <div className="menu-icon">
          <div className="deliveroo-logo">
            <Button
              style={{
                border: " #000000",
                color: "#2e3333",
                height: 40,
               
              }}
              variant="outlined"
              color="primary"
              startIcon={<OutdoorGrillIcon style={{ color: "#00ccbc" }} />}
            >
              Deliveroo
            </Button>
          </div>
          <div className="signup-button">
            <Button
              style={{
                borderColor: "#e8ebeb",
                color: "#2e3333",
                height: 40,
                // width: 110,
              }}
              variant="outlined"
              color="primary"
              startIcon={<CottageIcon style={{ color: "#00ccbc" }} />}
            >
              Sign up or log in
            </Button>
          </div>
          <div>
            <Button
              style={{
                borderColor: "#e8ebeb",
                color: "#2e3333",
                height: 40,
                width: 110,
                fontFamily: 'sans-serif'
              }}
              variant="outlined"
              color="primary"
              startIcon={<MenuIcon style={{ color: "#00ccbc" }} />}
            >
              Menu
            </Button>
          </div>
          
        </div>
      </div>
      <Divider/>
    </div>
  );
};

export default Header;
