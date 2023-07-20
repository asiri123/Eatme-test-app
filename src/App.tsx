import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import Login from "../src/features/login/Login"
import Menu from "../src/features/menu/Menu"
import Footer from "./components/footer/Footer"
import CardItem from "./components/card/CardItem"


function App() {
  return (
    <div className="App">
      {/* <Footer /> */}
      {/* <Menu/> */}
      {/* <Login/> */}
      <CardItem/>
      
    </div>
  )
}

export default App
