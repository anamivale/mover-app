import React from "react"
import "./css/admin.css"
import Orders from "./Orders"
import Comments from "./comments"

function Admin() {
  return (
    <div>
      <h1>Admin Interface</h1>
      {/* <div className="sidebar">
        <li>User</li>
        <li>Order</li>
        <li>Trucks</li>
      </div> */}
      <div className="interface">
        <div className="orders">
          <h1 className="order-title">Orders</h1>
          <Orders />
        </div>
        <div className="trucks">Trucks</div>
        <div className="comments">
          <Comments />
        </div>
      </div>
    </div>
  )
}

export default Admin
