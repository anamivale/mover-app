import React from "react"
import Home from "./components/home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/admin/Login"
import Orders from "./components/admin/Orders"
import Admin from "./components/admin/admin"
import Order from "./components/Order"
import Comments from "./components/admin/comments"
// import SimpleMap from "./components/map"
// import decode from "jwt-decode"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/comments" element={<Comments />} />

          <Route exact path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
