const express=require('express');
const dbcoonect = require('./config/db');
const userRouter = require('./routes/user.route');
const movieRouter = require('./routes/movie.rote');
const movie = require('./model/movie');
const { upload } = require('./controllers/movie.controller');

const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/user",userRouter);
app.use("/movie",movieRouter);
app.get('/', (req, res) =>{
    res.send("Welcome to the movie API");
});
app.post('/movie',upload.single('img') , (req, res) =>{
    console.log("req.file", req.file);
    res.send("image uploaded successfully!");
});


app.listen(8090,()=>{
    console.log("listening on port 8090");
    dbcoonect();
})