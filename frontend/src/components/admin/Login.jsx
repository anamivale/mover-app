import React from "react"
import { NavLink } from "react-router-dom"
import "./css//login.css"

function Login() {
  return (
    <div className="login">
      <form className="form">
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id="email" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" />
        <br />
        <div className="btn-login">
          <NavLink to="/" className="link">
            <button>Login</button>
          </NavLink>
        </div>
        <p>
          Don't have an account yet? <NavLink to="/login"> Signup</NavLink>
        </p>
      </form>
    </div>
  )
}

export default Login
