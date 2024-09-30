const mongoose = require('mongoose');

const dbcoonect= async (req, res) => {
    await mongoose.connect("mongodb://localhost:27017/users");
    console.log("Connected to MongoDB");
};

module.exports = dbcoonect;