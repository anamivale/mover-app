import React from "react"
import { NavLink } from "react-router-dom"

function Order(props) {
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" />
        <br />
        <label htmlFor="name">Contact</label>
        <input type="contact" />
        <br />
        <label htmlFor="name">Email</label>
        <input type="email" />
        <br />
        <button>submit</button>
        <p>
          If you have an account <NavLink to="/login"> Login</NavLink>
        </p>
      </form>
    </div>
  )
}

export default Order
