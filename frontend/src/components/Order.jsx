import React from "react"

function Order(props) {
  return (
    <div>
      <h1>Complete Your Order</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" />
        <br />
        <label htmlFor="name">Contact</label>
        <input type="contact" />
        <br />
        <label htmlFor="name">Email</label>
        <input type="email" />
        <br />
        <button>submit</button>
      </form>
    </div>
  )
}

export default Order
