const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt= require("bcrypt");
const User = require("../../models/User");
users.use(cors());
process.env.SECRET_KEY = 'secret';

users.post('/register',(req,res) =>{

    const today = new Date();
    const userData = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
    email:req.body.email,
    password:req.body.password,
    created:today
    };
    user.findOne({
        email:req.body.email

    })
        .then(user =>{
            if(!user) {

                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user => {
                            res.join({status: user.email + 'registered!'})
                        })
                })
            }
             else{
                res.join({error:'user already exists!'})
            }

        })
        .catch(err =>{

            res.send('error:' + err)

        })


})

users.post('/login',(req,res) =>{
    User.findOne({


        email:req.body.email
    })
        .then(user =>{
            if(user){

                if(bcrypt.compareSync(req.body.password,user.password)){
                    const payload = {
                        _id:user._id,
                        first_name:user.first_name,
                        last_name:user.last_name,
                        email:user.email,
                        password:user.password
                    };
                    let token= jwt.sign(payload,process.env.SECRET_KEY,{

                        expiresIn:1440
                    });
                    res.send(token)

                }
            }

        })
})
module.exports = users