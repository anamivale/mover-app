import React, { useState, useEffect } from "react"
import "./css/admin.css"
import axios from "axios"
import { NavLink, useNavigate } from "react-router-dom"
import jwt from "jwt-decode"

function Admin() {
  const [oders, setOders] = useState([])
  const [comments, setComments] = useState([])
  const [user, setUser] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      const user = jwt(token)

      if (user) {
        setUser(user.name)
        getOrders()
        getComments()
      } else {
        navigate("/login")
      }
    } else {
      navigate("/login")
    }
  }, [])

  const getOrders = () => {
    try {
      axios.get("http://localhost:4002/orders").then((res) => {
        setOders(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getComments = () => {
    try {
      axios.get("http://localhost:4002/comments").then((res) => {
        setComments(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="Admin">
      <div className="name-div">
        <h1 className="admin-title">Admin Interface</h1>
        <h1 className="name"> {user}</h1>
      </div>
      <div className="wrapper">
        <div className="sidebar">
          <div className="sidebar-users">Comments {comments.length}</div>
          <div className="sidebar-orders">Orders {oders.length}</div>
          <div className="sidebar-trucks">Trucks</div>
        </div>
        <div className="interface">
          <NavLink className="navlinks" to="/orders">
            <div className="orders">
              <h1 className="order-title">Orders</h1>
            </div>
          </NavLink>
          <div className="trucks">
            <h1>Trucks </h1>
          </div>
          <NavLink className="navlinks" to="/comments">
            <div className="admin-comments">
              <h1 className="cmnt">Comments</h1>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Admin
