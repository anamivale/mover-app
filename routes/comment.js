const route = require("express").Router()

const Comments = require("../models/comment")

route.post("/comment", async (req, res) => {
  const { name, email, comment } = req.body

  try {
    const newComment = new Comments(req.body)
    await newComment.save()
    res.status(200).json("send")
  } catch (error) {
    res.status(500).json(error.message)
  }
})

route.get("/comments", async (req, res) => {
  try {
    const getComments = await Comments.find()
    res.status(200).json(getComments)
  } catch (error) {
    res.status(500).json(error.message)
  }
})
route.delete("/deletecomment", async (req, res) => {
  try {
    const cmnt = await Comments.findOneAndRemove(req.body.id)
    res.status(200).json(cmnt)
  } catch (err) {
    res.status(500).json(err.message)
    console.log(err.message)
  }
})

module.exports = route
