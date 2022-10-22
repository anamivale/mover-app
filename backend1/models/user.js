const mongoose = require("mongoose")

const User = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 4,
      validate(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error('Password cannot contain "password"')
        }
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("email is invalid")
        }
      },
    },
    contact: {
      type: Number,
      required: true,
      minlength: 10,
    },
  },
  { timestamp: true }
)

module.exports = mongoose.model("users", User)
