const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title:String,
    description:String,
    category:String,
    actors:String,
    image:[],
})

const Movies = mongoose.model('movies',movieSchema);

module.exports = Movies;