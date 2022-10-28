const mongoose = require("mongoose")
const dotenv = require("dotenv")
const express = require("express")
const app = express()
const cors = require("cors")
const { json } = require("body-parser")
const Users = require("./routes/user")
const Order = require("./routes/order")

app.use(json())
app.use(cors())
dotenv.config()

mongoose.connect(process.env.MONGODB_URI || process.env.url, () => {
  console.log("db connected")
})

const port = process.env.PORT || process.env.port
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"))
}

app.use("/", Order)
app.use("/", Users)
app.use("/", require("./routes/comment"))

app.listen(port, () => {
  console.log("listenning ")
})
