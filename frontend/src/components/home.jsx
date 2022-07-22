import React from "react"

import { NavLink } from "react-router-dom"
import "../css/home.css"
function Home() {
  return (
    <div>
      <nav>
        <div>
          <h1>Easy Moving</h1>
        </div>
        <div>
          <NavLink to="/login" className="link">
            Login
          </NavLink>
          <NavLink to="/About" className="link">
            About
          </NavLink>
          <NavLink to="/Contact" className="link">
            Contact
          </NavLink>
        </div>
      </nav>
      <div>
        <h1>
          OUR MISSION: PROVIDE MOVING TIPS THAT SAVE YOU TIME AND MONEY DURING
          THE JOURNEY INTO YOU ARE NEW HOME OR OFFICE!
        </h1>
        <img src="../images/truck1.png" alt="truck" />
      </div>
    </div>
  )
}

export default Home
