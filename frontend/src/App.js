import React from "react"
// import Home from "./components/home"
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import About from "./components/About"
// import Login from "./components/Login"
// import Contact from "./components/Contact"
import Admin from "./components/admin"

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter> */}
      <Admin />
    </div>
  )
}

export default App
