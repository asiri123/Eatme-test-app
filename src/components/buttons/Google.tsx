import React from "react";
import Button from "@mui/material/Button";
import GoogleIcon from '@mui/icons-material/Google';

const Google = () => {
  return (
    <Button
      className=""
      variant="outlined"
      color="primary"
      startIcon={<GoogleIcon />}
    >
      Continue with Google
    </Button>
  );
};

export default Google;
