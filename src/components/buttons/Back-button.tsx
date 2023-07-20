import Button from "@mui/material/Button"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"


const Backbtn = () => {
  return (
    <Button
      style={{
        border: " #000000",
        color: "#00ccbc",
        height: 40,
      }}
      variant="outlined"
      color="primary"
      startIcon={<ArrowBackIcon style={{ color: "#00ccbc" }} />}
    >
     Back
    </Button>
  )
}

export default Backbtn
