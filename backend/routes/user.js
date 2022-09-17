const router = require("express").Router()
const User = require("../models/user")
const jwt = require("jsonwebtoken")

router.get("/", (req, res) => {
  res.send("first route")
})

router.post("/user", async (req, res) => {
  const { name, password, email, contact } = req.body
  try {
    const user = new User(req.body)
    await user.save()
    const token = jwt.sign(process.env.sec, { password, email })
    res.send("added")
  } catch (error) {
    console.log(error[0])
  }
})

module.exports = router
