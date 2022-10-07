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
    res.status(500).json(error.message)
  }
})
router.post("/login", async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email: email })
    if (!user) throw new Error("user not found")
    const pwd = await bcrypt.compare(password, user.password)
    if (!pwd) throw new Error("wrong password")
    const token = jwt.sign(
      {
        email,
        pwd,
      },
      process.env.sec,
      { expiresIn: "1h" }
    )
    res.status(200).json({ email, token })
  } catch (err) {
    res.status(500).json(err.message)
  }
})

module.exports = router
