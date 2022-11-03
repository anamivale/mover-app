import React from "react"
import Track7 from "../images/1300.jpg"
import HOmeTruck from "../images/sizes.jpg"
import Track2 from "../images/1000-100.jpg"
import Track3 from "../images/1300-100.jpg"
import Track4 from "../images/2000-100.jpg"
import Track5 from "../images/1700.jpg"
import Track6 from "../images/3500.jpg"
import logo from "../images/logo.jpg"

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
          <div className="logo">
            <img src={logo} alt="" className="logo" />
          </div>
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
          <a href="#services" className="link" style={{ marginRight: "40px" }}>
            Services
          </a>
        </div>
      </nav>
      <div>
        <h1 className="slogun">
          Enjoy reliable moving with Easy Movers. Save time, move easy and
          fast!!!
        </h1>
        <div className="img"></div>
      </div>
      <div id="about">
        <h1 className="about">About us</h1>
        <p>
          Easy Movers provide relocation services within kisumu town. We are
          working on extending our services to other locations outside kisumu
          town.
        </p>
        <p>
          Our vision as Easy movers is to lead, redefine and making relocation
          services undemanding and being the most efficient and reliable
          conveyers. We have a dependable team which is happy and ready to serve
          you. <br />
          Our core values are honesty, reliability , teamwork and enthusiasm.
        </p>
      </div>
      <div id="services">
        <h1 className="service-title">Services Offered</h1>
        <div className="size">
          <figure>
            <img src={HOmeTruck} alt="truck" className="size" />
          </figure>
        </div>
        <div className="service">
          <div className="svc">
            <div className="pkg1">
              <figure>
                <img src={Track2} alt="" />
                <figcaption>
                  {" "}
                  14 by 22 m3 truck @ kshs:1000 for every 100m
                </figcaption>
              </figure>
            </div>
            <div className="pkg2">
              <figure>
                <img src={Track3} alt="" />
                <figcaption>
                  {" "}
                  22 by 32 m3 truck @ kshs:1300 for every 100m{" "}
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="svc">
            <div className="pkg2">
              <figure>
                <img src={Track4} alt="" />
                <figcaption>
                  {" "}
                  40 by 59 m3 truck @ kshs:2000 for every 100m{" "}
                </figcaption>
              </figure>
            </div>
            <div className="pkg2">
              <figure>
                <img src={Track5} alt="" />
                <figcaption>
                  {" "}
                  32 by 40 m3 truck @ kshs:1700 for every 100m{" "}
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="svc">
            <div className="pkg2">
              <figure>
                <img src={Track6} alt="" />
                <figcaption>
                  {" "}
                  Tripper truck @ kshs 3500 for one trip + kshs 2000 for any
                  extra trip
                </figcaption>
              </figure>
            </div>
            <div className="pkg2">
              <figure>
                <img src={Track7} alt="" />
                <figcaption> Heavy load lifting at kshs 1500 per</figcaption>
              </figure>
            </div>
          </div>
        </div>
        <NavLink to="/order" className="link">
          <button className="btn-order">Make your order</button>
        </NavLink>
      </div>
      <div id="contact">
        <h1 className="about">Contact Us</h1>
        <div className="contact">
          <p>
            <strong>Location:</strong> kisumu <br /> <strong>Email:</strong>{" "}
            muhembelev@gmail.com <br /> <strong>contact:</strong>+254797936562
          </p>
        </div>
      </div>
      <div className="feedback">
        <h1>Leave your comment</h1>
        <form onSubmit={handleSubmit} className="home-form">
          <input
            type="text"
            placeholder="name"
            className="input"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <br />
          <input
            type="email"
            className="input"
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
