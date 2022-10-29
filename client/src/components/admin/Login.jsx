import React from "react"
import { useState } from "react"
import axios from "axios"
import "./css//login.css"
import { useNavigate } from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      const user = { email, password }
      const config = {
        header: {
          "content-type": "application/json",
        },
      }
      axios.post("http://localhost:4002/login", user, config).then((res) => {
        navigate("/admin")
      })
    } catch (error) {
      console.log(error.message)
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
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
