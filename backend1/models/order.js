const mongoose = require("mongoose")

const order = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    From: {
      type: String,
      required: true,
    },
    To: {
      type: String,
      required: true,
    },
    typeOfOder: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
)

module.exports = mongoose.model("order", order)
