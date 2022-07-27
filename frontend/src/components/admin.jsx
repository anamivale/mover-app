import React from "react"
import "../css/admin.css"
function Admin() {
  return (
    <div>
      <h1>Admin Interface</h1>
      <div className="sidebar">
        <li>User</li>
        <li>Order</li>
        <li>Trucks</li>
      </div>
      <div className="interface">
        <div className="users">users</div>
        <div className="orders">orders</div>
        <div className="trucks">trucks</div>
      </div>
    </div>
  )
}

export default Admin
