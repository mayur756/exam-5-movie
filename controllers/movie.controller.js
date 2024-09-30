const Movies = require('../model/movie');
const multer = require('multer');


const allmovies = async (req, res) => {
    let data = await Movies.find();
    res.send(data);
};

const createMovie = async (req, res) => {
    let {title, description,category,actors}=req.body;
    let image;

    if(req.file){
        image=req.file.map((ele)=>ele.path);
    }

    let movie={
        title,
        description,
        category,
        actors,
        image,
    }

    let data = await Movies.create(movie);
    res.send(data);
}

const updateMovie = async (req, res) => {
    let {id}=req.params;
    let data = await Movies.findByIdAndUpdate(req.id, req.body, {new: true});
    res.send(data);
};

const deleteMovie = async (req, res) => {
    let {id}=req.params;
    let data = await Movies.findByIdAndDelete(req.id);
    res.send(data);
};


const storage=multer.diskStorage({
    destination:"movies",
    filename:(req,file,cb)=>{
        cb(null, Date.now()  + file.originalname);
    },
})

const upload=multer({storage:storage});

module.exports={allmovies,createMovie,deleteMovie,updateMovie,upload};