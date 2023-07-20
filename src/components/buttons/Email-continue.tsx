import React from "react";
import Button from "@mui/material/Button";
import EmailIcon from '@mui/icons-material/Email';
const EmailContinue = () => {
  return (
    <Button
      style={{
        backgroundColor: "#00ccbc",
        borderColor: "#ffffff",
        color: "#ffffff",
        height: 50,
        width: 390,
        fontFamily: "sans-serif",
        fontWeight: 700,
      }}
      variant="outlined"
      color="primary"
      startIcon={<EmailIcon style={{color:"#ffffff"}}/>}
    >
      Continue with Apple
    </Button>
  );
};

export default EmailContinue;
