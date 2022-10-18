import React from "react"
import "./css/admin.css"
import Orders from "./Orders"
import Comments from "./comments"

function Admin() {
  return (
    <div className="Admin">
      <h1 className="admin-title">Admin Interface</h1>
      <div className="wrapper">
        <div className="sidebar">
          <li>User</li>
          <li>Order</li>
          <li>Trucks</li>
        </div>
        <div className="interface">
          <div className="orders">
            <h1 className="order-title">Orders</h1>
          </div>
          <div className="trucks">
            <h1>Trucks</h1>
          </div>
          <div className="comments">
            <h1>Comments</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
