const mongoose = require("mongoose")

// Delete this before rollout
mongoose.set('debug', true)

// Connect to DB
mongoose.connect("mongodb://localhost/martinbshop", { useNewUrlParser: true })
    .then(console.log("MongoDB connected..."))
    .catch(err => console.log(err))

module.exports = mongoose