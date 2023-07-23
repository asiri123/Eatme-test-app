import Button from "@mui/material/Button"
import GroupIcon from "@mui/icons-material/Group"


const Startgroup = () => {
  return (
    <Button
      style={{
        borderColor: "#e8ebeb",
        color: "#2e3333",
        height: 40,
        textTransform: "none"
      }}
      variant="outlined"
      color="primary"
      startIcon={<GroupIcon style={{ color: "#00ccbc" }} />}
    >
      Start group order
    </Button>
  )
}

export default Startgroup
