import { Routes, Route } from "react-router-dom"
import Login from "./features/login/Login"
import Menu from "./features/menu/Menu"
import { BrowserRouter } from "react-router-dom"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes
