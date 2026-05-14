const mongoose = require("mongoose")

const ProgressSchema = new mongoose.Schema({

  username: String,

  completedLessons: Number,

  achievements: [String]

})

module.exports = mongoose.model("Progress", ProgressSchema)