import Button from "@mui/material/Button"
import MenuIcon from "@mui/icons-material/Menu"


const MenuBtn = () => {
  return (
    <Button
      style={{
        borderColor: "#e8ebeb",
        color: "#2e3333",
        height: 40,
        width: 110,
        fontFamily: "sans-serif",
      }}
      variant="outlined"
      color="primary"
      startIcon={<MenuIcon style={{ color: "#00ccbc" }} />}
    >
      Menu
    </Button>
  )
}

export default MenuBtn
