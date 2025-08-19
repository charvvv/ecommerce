const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodeMailer = require('nodemailer')
const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const jwt = require('jsonwebtoken');

mongoose.connect("mongodb+srv://cpgunda:YMphqQSn74b2gI9l@datas.7jod7zz.mongodb.net/?retryWrites=true&w=majority&appName=datas",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("mongodb is connected")
})
.catch((err)=>{
    console.log("connection error", err)
});

app.listen(port,()=>{
    console.log("server is running on port 8000")
})

