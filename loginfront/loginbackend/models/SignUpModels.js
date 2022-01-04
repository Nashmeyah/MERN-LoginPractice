const mongoose = require("mongoose")

const signUpTemplate = new mongoose.Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    require: true
  },
  companyName: {
    type: String,
  },
  password: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('mytable', signUpTemplate)