import React from "react"
import Track1 from "../images/truck1.png"
import { NavLink } from "react-router-dom"
import "../css/home.css"
function Home() {
  return (
    <div>
      <nav>
        <div className="ggg">
          <h1>Easy Moving</h1>
        </div>
        <div>
          {/* <NavLink to="/login" className="link">
            Login
          </NavLink> */}
          <a href="#about" className="link">
            About
          </a>
          <a href="#contact" className="link">
            Contact
          </a>
          <a href="#services" className="link">
            Services
          </a>
        </div>
      </nav>
      <div>
        <h1>
          OUR MISSION IS TO PROVIDE MOVING TIPS THAT SAVE YOU TIME AND MONEY
          DURING THE JOURNEY INTO YOUR NEW HOME OR OFFICE!
        </h1>
        <div className="img"></div>
      </div>
      <div id="about">
        <h1 className="about">About us</h1>
        <p>
          We are to provide services for the residence of kisumu town shifting
          from one place to anoter but within kisumu toen. in future we can
          extend to other town.
        </p>
        <p>
          Our Vision and Core Values Cube Movers will lead in defining
          excellence in relocation by ensuring quality service delivery and
          delight. Honesty Courtesy Creativity Teamwork Enthusiasm Care
        </p>
      </div>
      <div id="services">
        <h1>Services Offered</h1>
        <div className="service">
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
      <div id="contact">
        <h1 className="about">Contact Us</h1>
        <div className="contact">
          <p>
            Email: muhembelev@gmail.com <br /> contact:+254797936562
          </p>
          <p>
            Email: muhembelev@gmail.com <br /> contact:+254797936562
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
