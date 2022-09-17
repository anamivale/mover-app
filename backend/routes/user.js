const router = require("express").Router()
const User = require("../models/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

router.get("/", (req, res) => {
  res.send("first route")
})

router.post("/user", async (req, res) => {
  const { name, email, contact } = req.body
  try {
    const bpass = (await bcrypt.hash(req.body.password, 10)).toString()
    const user = new User({
      name: req.body.name,
      password: bpass,
      email: req.body.email,
      contact: req.body.contact,
    })
    await user.save()
    const token = jwt.sign({ email }, process.env.sec, {
      expiresIn: "1h",
    })
    res.status(200).json({ name, contact, token })
  } catch (error) {
    res.status(500).json("error")
  }
})

module.exports = router
