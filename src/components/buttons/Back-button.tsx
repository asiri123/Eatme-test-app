import Button from "@mui/material/Button"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useNavigate } from "react-router-dom"

const Backbtn = () => {
  const navigate = useNavigate()
  return (
    <Button
      style={{
        border: " #000000",
        color: "#00ccbc",
        height: 40,
      }}
      variant="outlined"
      color="primary"
      onClick={() => navigate("/")}
      startIcon={<ArrowBackIcon style={{ color: "#00ccbc" }} />}
    >
      Back
    </Button>
  )
}

export default Backbtn
