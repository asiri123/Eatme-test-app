import Button from "@mui/material/Button";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import React from "react";

const Facebook = () => {
  return (
    <Button
      style={{
        backgroundColor: "	#4267B2",
        borderColor: "#e8ebeb",
        color: "#ffffff",
        height: 50,
        width: 390,
        fontFamily: "sans-serif",
        fontWeight: 700,
      }}
      variant="outlined"
      color="primary"
      startIcon={<FacebookRoundedIcon />}
    >
      Continue with facebook
    </Button>
  );
};

export default Facebook;
