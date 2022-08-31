import React from "react"
import Track1 from "../images/truck1.png"
import "../css/package.css"
import { NavLink } from "react-router-dom"

function Package() {
  return (
    <div>
      <h1>We only have two packages at the moment</h1>
      <div className="packages">
        <div className="pkg1">
          <figure>
            <img src={Track1} alt="" />
            <figcaption> price: 3000/trip </figcaption>
          </figure>
          <NavLink to="/order" className="link">
            <button>Order</button>
          </NavLink>
        </div>
        <div className="pkg2">
          <figure>
            <img src={Track1} alt="" />
            <figcaption> price: 4500/trip </figcaption>
          </figure>
          <NavLink to="/order" className="link">
            <button>Order</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Package
