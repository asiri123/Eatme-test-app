import React from "react"
import Header from "../../components/header/Header"
import Facebook from "../../components/buttons/Facebook"
import Google from "../../components/buttons/Google"
import Apple from "../../components/buttons/Apple"
import EmailContinue from "../../components/buttons/Email-continue"
import Footer from "../../components/footer/Footer"
import "./Login.scss"
import Divider from "@mui/material/Divider"

const Login = () => {
  return (
    <div className="login-main-container">
      <Header />
      <div className="divider" />
      <div className="login-text">
        <div className="main-text-style">
          <text>Sign up or log in</text>
        </div>
        <div style={{}}>
          <Facebook />
          <Google />
          <Apple />
        </div>
        <div className="wrap-row">
          <div className="divider-text" />
          <div className="or-text">or</div>
          <div className="divider-text" />
        </div>

        <div>
          <EmailContinue />
        </div>

        <div className="bottom-text">
          <text style={{ textAlign: "left", fontSize: 14, color: "#585c5c" }}>
            By continuing you agree to our{" "}
            <a href="" style={{ color: "#00ccbc" }}>
              T&Cs
            </a>
            . Please also check out our<a> </a>
            <a href="" style={{ color: "#00ccbc" }}>
              Privacy Policy
            </a>
            . We use your data to offer you a personalised experience and to
            better understand and improve our services.
            <a href="" style={{ color: "#00ccbc" }}>
              <a> </a>For more information see here.
            </a>
          </text>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login
