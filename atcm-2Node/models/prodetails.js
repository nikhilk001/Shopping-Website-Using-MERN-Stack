const mongoose=require('mongoose');
var prodetails=mongoose.model('prodetails',{
    firstname:{type:String},
    lastname:{type:String},
    phoneno:{type:String},
    email:{type:String},
    title:{type:String},
    category:{type:String},
    price:{type:String},
    description:{type:String}

    


});


module.exports={
    prodetails
};