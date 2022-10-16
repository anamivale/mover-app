const router = require("express").Router()
const order = require("../models/order")

router.post("/order", async (req, res) => {
  const { name, contact, From, email, To, typeOfOder } = req.body
  try {
    const newOrder = new order({
      name: req.body.name,
      contact: req.body.contact,
      From: req.body.From,
      email: req.body.email,
      To: req.body.To,
      typeOfOder: req.body.typeOfOder,
    })
    await newOrder.save()
    res.status(200).json(newOrder)
  } catch (error) {
    res.status(500).json(error)
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
