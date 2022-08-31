import React from "react"
import { NavLink } from "react-router-dom"
import "../css/login.css"

function Login() {
  return (
    <div className="login">
      <form className="form">
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id="" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="" />
        <br />
        <div className="btn-login">
          <NavLink to="/package" className="link">
            <button>Login</button>
          </NavLink>
        </div>
        <p>
          Don't have an account yet? <a href="#">register here</a>
        </p>
      </form>
    </div>
  )
}

export default Login
