
import Button from "@mui/material/Button";
import EmailIcon from '@mui/icons-material/Email';
import "./Button.scss"
const EmailContinue = () => {
  return (
    <Button
      className="email-style"
      variant="outlined"
      color="primary"
      startIcon={<EmailIcon style={{color:"#ffffff"}}/>}
    >
      Continue with Apple
    </Button>
  );
};

export default EmailContinue;
