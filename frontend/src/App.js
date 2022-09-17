import React from "react"
import Home from "./components/home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Order from "./components/Order"
// import SimpleMap from "./components/map"
// import decode from "jwt-decode"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
