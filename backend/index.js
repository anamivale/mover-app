const mongo = require("mongoose")
const dotenv = require("dotenv")
const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")

const port = process.env.port

app.listen(port, () => {
  console.log("connected")
})
