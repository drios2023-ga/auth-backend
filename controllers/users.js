const User = require('../models/user');
require('dotenv').config();

module.exports = {
    create,
    login, 
    show
}

async function create(req, res){
    try {
        await User.create(req.body);
      } catch (err) {
        console.log(err);
      }
}

async function login(req, res) {
    try {

        console.log(req.body.username);
        const user = await User.findOne({username: req.body.username});
        console.log(user);
        if (user.username != req.body.username || user.password != req.body.password ){
            throw new Error();
        }
       res.status(201).json('Login OK');
      
    } catch (err) {
      res.status(400).json('Bad credentials');
    }
  }  

async function show(req, res) {
      try{
      res.json(await User.findById(req.params.id));
      } catch (error) {
        res.status(400).json(error);

      }
  }


