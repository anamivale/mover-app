import React from "react"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import axios from ('axios')
import "./css//login.css"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const user = { email, password }

  try {
    axios.post("http://localhost:4002/")
  } catch (error) {
    
  }
  }

  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id="email" value={email} onChange={handleEmail} />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <div className="btn-login">
          {/* <NavLink to="/admin" className="link"> */}
          <button>Login</button>
          {/* </NavLink> */}
        </div>
      </form>
    </div>
  )
}

export default Login
