const router = require("express").Router()
const order = require("../models/order")

router.post("/order", async (req, res) => {
  const { name, contact, email, From, To, typeOfOder } = req.body
  try {
    const newOrder = new order(req.body)
    await newOrder.save()
    res.status(200).json("added")
  } catch (error) {
    res.status(500).json(error.message)
  }
})

router.get("/orders", async (req, res) => {
  try {
    const orders = await order.find()
    res.status(200).json(orders)
  } catch (error) {
    console.log(error.message)
    res.status(500).json(error.message)
  }
})

module.exports = router
