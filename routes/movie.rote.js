const {Router}=require('express');
const { allmovies, createMovie, updateMovie, deleteMovie, upload } = require('../controllers/movie.controller');

const movieRouter = Router();

movieRouter.get('/allmovie',allmovies);
movieRouter.post('/createmovie',createMovie);
movieRouter.patch('/update/:id',updateMovie);
movieRouter.delete('/deleteMovie/:id',deleteMovie);

module.exports = movieRouter;