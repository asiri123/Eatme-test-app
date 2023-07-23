import React from "react"
import { Apple, Facebook, Google, Email } from "@mui/icons-material"
import { HeaderLogin, Footer } from "../../components/index"
import "./Login.scss"
import { Button } from "../../components"

const Login = () => {
  return (
    <div className="login-main-container">
      <div className="Header-container">
        <HeaderLogin />
      </div>
      <div className="divider" />
      <div className="login-option-container">
        <div className="header-signup-login">sign up or log in</div>
        <Button icon={Facebook} className={"facebook-style"}>
          Continue with Facebook
        </Button>
        <Button icon={Google} className={"google-style"}>
          Continue with Google
        </Button>
        <Button icon={Apple} className={"apple-style"}>
          Continue with Apple
        </Button>
        <div className="wrap-row">
          <div className="divider-text" />
          <div className="or-text">or</div>
          <div className="divider-text" />
        </div>
        <Button icon={Email} className={"email-style"}>
          Continue with Email
        </Button>
        <div className="bottom-text">
          <div style={{ textAlign: "left", fontSize: 14, color: "#585c5c" }}>
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
          </div>
        </div>
      </div>
      <div className="footer-maincontainer">
        <Footer />
      </div>
    </div>
  )
}

export default Login
