var express = require("express");
var cors = require("cors");
app.use(cors());
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
// var port = process.env.PORT || 5000;

app.use(cors({credentials: true, origin: 'http://localhost:3000/'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods','DELETE, PUT', 'GET', 'POST');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  next();
});

app.use(bodyParser.json());
app.use(

    bodyParser.urlencoded({
        extended:false

    })
);
const mongoURI ="mongodb://34.231.18.121:27017/usersDB";

mongoose
.connect(mongoURI,{useNewUrlParser:true})
.then(() => console.log ("MongoDB connected"))
.catch(err => console.log(err));


var Users = require('./routes/users');
app.use('./users',Users);


var port = process.env.NODE_ENV === 'production' ? 80 : 4005;
app.listen(port ,() =>{
    console.log("Server is running on port:" + port)
});