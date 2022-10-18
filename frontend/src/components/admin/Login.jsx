import React from "react"
import { useState } from "react"
import axios from "axios"
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
    const confi = {
      header: {
        "content-type": "application/json",
      },
    }

    try {
      axios.post("http://localhost:4002/", confi, user).then(() => {})
    } catch (error) {}
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
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
