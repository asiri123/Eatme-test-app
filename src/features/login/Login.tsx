import React from "react";
import Header from "../../components/Header";
import Facebook from "../../components/buttons/Facebook";
import Google from "../../components/buttons/Google";
import Apple from "../../components/buttons/Apple";
import EmailContinue from "../../components/buttons/Email-continue";
import "../styles/Login.scss";
import Divider from "@mui/material/Divider";

const Login = () => {
  return (
    <div className="login-main-container">
      <Header />
      <div className="login-text">
        <div className="main-text-style">
          <text>Sign up or log in</text>
        </div>
        <div style={{}}>
          <Facebook />
          <Google />
          <Apple />
        </div>

        <div>
          <EmailContinue />
        </div>

        <div>
          <text style={{ textAlign: "left", fontSize: 14, color: "#585c5c" }}>
            By continuing you agree to our{" "}
            <a href="" style={{ color: "#00ccbc" }}>
              T&Cs
            </a>
            . Please also check out our
            <a href="" style={{ color: "#00ccbc" }}>
              Privacy Policy
            </a>
            . We use your data to offer you a personalised experience and to
            better understand and improve our services.
            <a href="" style={{ color: "#00ccbc" }}>
              For more information see here.
            </a>
          </text>
        </div>
      </div>
    </div>
  );
};

export default Login;
