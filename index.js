const mongoose = require("mongoose")
const dotenv = require("dotenv")
const express = require("express")
const app = express()
const cors = require("cors")
const { json } = require("body-parser")
const Users = require("./routes/user")
const Order = require("./routes/order")
const path = require("path")

app.use(json())
app.use(cors())
dotenv.config()

mongoose
  .connect(process.env.MONGODB_URI || process.env.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database ")
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`)
  })

const port = process.env.PORT || 4002
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
  })
}

app.use("/", Order)
app.use("/", Users)
app.use("/", require("./routes/comment"))

app.listen(port, () => {
  console.log("listenning ")
})
