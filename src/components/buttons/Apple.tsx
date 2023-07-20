
import Button from "@mui/material/Button";
import AppleIcon from '@mui/icons-material/Apple';
import "./Button.scss"

const Apple = () => {
  return (
    <Button
      className="apple-style"
      variant="outlined"
      color="primary"
      startIcon={<AppleIcon />}
    >
      Continue with Apple
    </Button>
  );
};

export default Apple;
