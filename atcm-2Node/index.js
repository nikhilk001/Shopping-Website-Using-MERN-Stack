const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
const { mongoose } =require('./db.js');

var prodetailsController=require('./controllers/prodetailsController.js');

var app=express();
app.use(bodyParser.json());
app.listen(3000,()=>console.log('server started at port 3000'));
app.use(cors({origin:'http://localhost:4200'}));
app.use('/prodetails',prodetailsController);