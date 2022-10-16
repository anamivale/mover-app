import React from "react"
import Track1 from "../images/truck1.png"
import { NavLink } from "react-router-dom"
import "../css/home.css"
import { useState } from "react"
import axios from "axios"
function Home() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = { name, email, comment }
    const confi = {
      header: {
        "content-type": "application/json",
      },
    }
    try {
      axios.post("http://localhost:4002/comment", data, confi).then((res) => {
        alert("sent")
      })
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <div className="home">
      <nav>
        <div className="ggg">
          <h1 className="logo">Easy Moving</h1>
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
        <h1 className="slogun">
          To save time and get moving tips, always come to easy moving. Easy
          moving <br /> makes your moving faster and enjoyable.
        </h1>
        <div className="img"></div>
      </div>
      <div id="about">
        <h1 className="about">About us</h1>
        <p>
          We are to provide services for the residence of kisumu town shifting
          from one place to anoter but within kisumu town. In future we can
          extend to other towns.
        </p>
        <p>
          Our Vision and Core Values Easy Movers will lead in defining
          excellence in relocation by ensuring quality service delivery and
          delight. Honesty Courtesy Creativity Teamwork Enthusiasm Care
        </p>
      </div>
      <div id="services">
        <h1 className="service-title">Services Offered</h1>
        <div className="service">
          <div className="pkg1">
            <figure>
              <img src={Track1} alt="" />
              <figcaption> price: 3000/trip </figcaption>
            </figure>
          </div>
          <div className="pkg2">
            <figure>
              <img src={Track1} alt="" />
              <figcaption> price: 4500/trip </figcaption>
            </figure>
          </div>
        </div>
        <NavLink to="/order" className="link">
          <button className="btn-order">Order</button>
        </NavLink>
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
      <div className="feedback">
        <h1>Leave your comment</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <br />
          <input
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <br />
          <textarea
            type="text"
            placeholder="Enter your comment here"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value)
            }}
          />
          <br />
          <button>submit</button>
        </form>
      </div>
    </div>
  )
}

export default Home
