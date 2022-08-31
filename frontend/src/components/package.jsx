import React from "react"

function Package() {
  return (
    <div>
      <h1>We only have two packages at the moment</h1>
      <div className="pkg1">
        <figure>
          <img src="../images/truck1.png" alt="" />
          <figcaption> price: 3000/trip </figcaption>
        </figure>
        <button>Order</button>
      </div>
      <div className="pkg2">
        <figure>
          <img src="../images/truck1.png" alt="" />
          <figcaption> price: 4500/trip </figcaption>
        </figure>
        <button>Order</button>
      </div>
    </div>
  )
}

export default Package
