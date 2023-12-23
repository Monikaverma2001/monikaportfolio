const mongoose=require("mongoose");

const table=mongoose.model('portcontact',{
    fname:{type:String,default:''},
    lname:{type:String,default:''},
    emial:{type:String,default:''},
    desc:{type:String,default:''},
    feedback:{type:String,default:''}
})
