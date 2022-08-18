import React, { useState } from "react"
import Home from "./components/home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./components/About"
import Login from "./components/Login"
import Contact from "./components/Contact"
import jwtDecode from "jwt-decode"
// import SimpleMap from "./components/map"
let logUser
if (localStorage.token) {
  const jwt = localStorage.getItem("token")
  logUser = jwtDecode(jwt)
}

function App() {
  const [user, setUser] = useState(logUser)
  if (!user) {
    return (
      <div>
        <Login />
      </div>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
