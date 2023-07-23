import Button from "@mui/material/Button"
import CottageIcon from "@mui/icons-material/Cottage"
import { useNavigate } from "react-router-dom";

const SignupBtn : React.FC= () => {

  const navigate = useNavigate();

  return (
    <Button
     onClick={()=>navigate("/menu")}
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
