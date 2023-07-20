import React from "react";
import Button from "@mui/material/Button";
import AppleIcon from '@mui/icons-material/Apple';

const Apple = () => {
  return (
    <Button
      style={{
        backgroundColor: "#000000",
        borderColor: "#000000",
        color: "#ffffff",
        height: 50,
        width: 390,
        fontFamily: "sans-serif",
        fontWeight: 700,
        marginBottom: 20
      }}
      variant="outlined"
      color="primary"
      startIcon={<AppleIcon />}
    >
      Continue with Apple
    </Button>
  );
};

export default Apple;
