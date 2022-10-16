import React from "react"
import { useState } from "react"
import axios from "axios"
import "../css/order.css"
import { NavLink } from "react-router-dom"

function Order() {
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")
  const [From, setFrom] = useState("")
  const [To, setTo] = useState("")
  const [typeOfOder, setTypeOfOder] = useState("")

  const handeleName = (e) => {
    setName(e.target.value)
  }
  const handeleContact = (e) => {
    setContact(e.target.value)
  }
  const handeleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleFrom = (e) => {
    setFrom(e.target.value)
  }
  const handeleTo = (e) => {
    setTo(e.target.value)
  }
  const handelOder = (e) => {
    setTypeOfOder(e.target.value)
  }

  const submit = (e) => {
    const data = { name, contact, email, From, To, typeOfOder }
    const config = {
      header: {
        "content-type": "application/json",
      },
    }

    e.preventDefault()

    axios
      .post("http://localhost:4002/order", data, config)
      .then((res) => {
        alert("Order Received. we will get back to you in less than 30 minutes")
      })
      .catch((error) => {
        alert(error.message)
      })
  }
  return (
    <div>
      <h1>complete your order</h1>
      <form onSubmit={submit}>
        <label htmlFor="name">Name</label> <br />
        <input type="text" value={name} onChange={handeleName} />
        <br />
        <label htmlFor="contact">Contact</label>
        <br />
        <input type="contact" value={contact} onChange={handeleContact} />
        <br />
        <label htmlFor="name">Email</label>
        <br />
        <input type="email" value={email} onChange={handeleEmail} />
        <br />
        <label htmlFor="from">From: </label>
        <br />
        <input type="text " value={From} onChange={handleFrom} />
        <br />
        <label htmlFor="from">To: </label>
        <br />
        <input type="text " value={To} onChange={handeleTo} />
        <br />
        <label htmlFor="from">Type of oder </label>
        <select name="" id="" onChange={handelOder}>
          <option value="">choose your Order</option>
          <option>type 1- 3000/=</option>
          <option>type2 - 6000/=</option>
        </select>
        <br />
        <br />
        <button>submit</button>
      </form>
      <NavLink to="/" className="link">
        <button className="back">Back</button>
        {/* add an icon and increase the size  */}
      </NavLink>
    </div>
  )
}

export default Order
