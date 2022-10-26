import React, { useState, useEffect } from "react"
import "./css/admin.css"
import axios from "axios"

function Admin() {
  const [oders, setOders] = useState([])
  useEffect(() => {
    getOrders()
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
  const [comments, setComments] = useState([])
  useEffect(() => {
    getComments()
  }, [])

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
      <h1 className="admin-title">Admin Interface</h1>
      <div className="wrapper">
        <div className="sidebar">
          <div className="sidebar-users">Comments {comments.length}</div>
          <div className="sidebar-orders">
            Order
            <span> {oders.length} </span>
          </div>
          <div className="sidebar-trucks">Trucks</div>
        </div>
        <div className="interface">
          <div className="orders">
            <h1 className="order-title">Orders</h1>
          </div>
          <div className="trucks">
            <h1>Trucks</h1>
          </div>
          <div className="admin-comments">
            <h1>Comments {comments.length}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
