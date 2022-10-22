const mongoose = require("mongoose")

const Oders = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
      minlength: 10,
    },
    From: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
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
  { timestamps: true }
)

module.exports = mongoose.model("oder", Oders)
