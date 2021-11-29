const express=require('express');
var router= express.Router();
var ObjectID=require('mongoose').Types.ObjectId;

var {prodetails} =require('../models/prodetails');

const app=express();
app.use(express.json());
router.get('/',(req,res)=>{prodetails.find((err,docs)=>{
    if(!err){
        res.send(docs);}
    else
        console.log("error retriving prodetails"+JSON.stringify(err,undefined,2));
    

})});

router.get('/:id',(req,res)=>{
     
    if(!ObjectID.isValid(req.params.id))
    {
        return res.status(400).send('No record with given id :${req.params.id}');}

    prodetails.findById(req.params.id,(err,doc)=>{
        if(!err)
        {
            res.send(doc);
        }
        else
        console.log("error retriving prodetails"+JSON.stringify(err,undefined,2));

    });

});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };

    prodetails.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
        if(!err)
        {
            res.send(doc);
        }
        else{
            console.log("error retriving prodetails"+JSON.stringify(err,undefined,2));
        }

    }); 
    
});



router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    prodetails.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});



router.post('/',(req,res)=>{
    var product=new prodetails({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        phoneno:req.body.phoneno,
        email:req.body.email,
        title:req.body.title,
        category:req.body.category,
        price:req.body.price,
        description:req.body.description,

    })
product.save((err,doc)=>{
    if(!err)
    {res.send(doc);}
    else{
        console.log("error retriving prodetails"+JSON.stringify(err,undefined,2));
    }
});


});




module.exports=router;