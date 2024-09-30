const User=require('../model/user.schema');

const getall=async (req, res) =>{
    let data = await User.find();
    res.send(data);
}

const createuser = async (req, res) =>{
    let data = await User.create(req.body);
    res.send(data);
}

const updateuser = async (req, res) =>{
    let {id}=req.params;
    let data = await User.findByIdAndUpdate(req.id, req.body, {new: true});
    res.send(data);
}

const deleteuser = async (req, res) =>{
    let {id}=req.params;
    let data = await User.findByIdAndDelete(req.id);
    res.send(data);
}

module.exports = {getall, createuser, updateuser, deleteuser};