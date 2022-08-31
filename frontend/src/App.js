import React from "react"
import Home from "./components/home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
// import SimpleMap from "./components/map"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
