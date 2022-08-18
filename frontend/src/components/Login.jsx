import React from "react"
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
          <button>Login</button>
        </div>
        <p>
          Don't have an account yet? <a href="#">register here</a>
        </p>
      </form>
    </div>
  )
}

export default Login
