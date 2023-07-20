import Button from "@mui/material/Button";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import "./Button.scss"

const Facebook = () => {
  return (
    <div>
      <Button
      // style={{ backgroundColor: "#4267B2"
      //  }}
      className="facebook-style"
      variant="outlined"
      color="primary"
      startIcon={<FacebookRoundedIcon />}
    >
      Continue with facebook
    </Button>
    </div>
    
  );
};

export default Facebook;
