import React from "react"
import { useState } from "react"
import axios from "axios"

function Order() {
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
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
    const data = { name, contact, email, from, to, typeOfOder }
    const config = {
      header: {
        "content-type": "application/json",
      },
    }

    e.preventDefault()

    axios
      .post("http://localhost:4002/order", data, config)
      .then((res) => {
        res.status(200).json("added")
      })
      .catch((error) => {
        alert("not added")
      })
  }
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={submit}>
        <label htmlFor="name">Name</label>
        <input type="text" value={name} onChange={handeleName} />
        <br />
        <label htmlFor="contact">Contact</label>
        <input type="contact" value={contact} onChange={handeleContact} />
        <br />
        <label htmlFor="name">Email</label>
        <input type="email" value={email} onChange={handeleEmail} />
        <br />
        <label htmlFor="from">From: </label>
        <input type="text " value={from} onChange={handleFrom} />
        <br />

        <label htmlFor="from">To: </label>
        <input type="text " value={to} onChange={handeleTo} />
        <br />

        <label htmlFor="from">Type of oder </label>
        <input type="text " value={typeOfOder} onChange={handelOder} />
        <br />

        <button>submit</button>
      </form>
    </div>
  )
}

export default Order
