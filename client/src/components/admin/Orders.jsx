import axios from "axios"
import React from "react"
import { useState, useEffect } from "react"

function Orders() {
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

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>From </th>
            <th>To</th>
            <th>Type Of Order</th>
            <th>clear</th>
          </tr>
        </thead>
        <tbody>
          {oders.map((order) => {
            return (
              <tr>
                <td>{order.name}</td>
                <td>{order.contact}</td>
                <td>{order.email}</td>
                <td>{order.From}</td>
                <td>{order.To}</td>
                <td>{order.typeOfOder}</td>
                <td>
                  <input className="clear" type="checkbox" />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Orders
