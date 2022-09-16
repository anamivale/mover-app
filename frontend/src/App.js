import React from "react"
import Home from "./components/home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Order from "./components/Order"
import Package from "./components/package"
// import SimpleMap from "./components/map"
import decode from "jwt-decode"
let userLogin
if (token) {
  const jwt = localStorage.getItem("token")
  const token = decode(jwt)
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/package" element={<Package />} />
          <Route exact path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
