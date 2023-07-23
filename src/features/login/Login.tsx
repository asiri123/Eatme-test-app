import React from "react"
import { Apple, Facebook, Google, Email } from "@mui/icons-material"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import "./Login.scss"
import {Button} from "../../components"

const Login = () => {
  return (
    <div className="login-main-container">
      <Header />
      <div className="divider" />
      <div className="login-text">
        <div className="main-text-style">Sign up or log in</div>
        <div>
          <Button icon={Facebook} className={"facebook-style"}>
            Continue with Facebook
          </Button>
          <Button icon={Google} className={"google-style"}>
            Continue with Google
          </Button>
          <Button icon={Apple} className={"apple-style"}>
            Continue with Apple
          </Button>
        </div>
        <div className="wrap-row">
          <div className="divider-text" />
          <div className="or-text">or</div>
          <div className="divider-text" />
        </div>
        <div>
          <Button icon={Email} className={"email-style"}>
            Continue with Email
          </Button>
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
