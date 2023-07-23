import Button from "@mui/material/Button"
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill"

const mainlogo = () => {
  return (
    <Button
      style={{
        border: " #000000",
        color: "#00ccbc",
        height: 40,
        fontWeight: 700,
        fontSize:20

      }}
      variant="outlined"
      color="primary"
      startIcon={<OutdoorGrillIcon style={{ color: "#00ccbc",  }} />}
    >
      Deliveroo
    </Button>
  )
}

export default mainlogo
