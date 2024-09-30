const {Router} = require('express');
const { getall, createuser, updateuser, deleteuser } = require('../controllers/user.controller');

const userRouter= Router();


userRouter.get('/all',getall);
userRouter.post('/create',createuser);
userRouter.patch('/update/:id',updateuser);
userRouter.delete('/delete/:id',deleteuser);


module.exports = userRouter;