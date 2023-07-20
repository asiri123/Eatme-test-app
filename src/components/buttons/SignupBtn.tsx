import Button from "@mui/material/Button"
import CottageIcon from "@mui/icons-material/Cottage"


const SignupBtn = () => {
  return (
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
  )
}

export default SignupBtn
