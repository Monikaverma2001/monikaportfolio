var mongoose = require('mongoose');
// define our students model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Contactusr', {
    fname: {type:String,default:''},
    lname:{type:String,default:''},
    email: {type:String,default:''},
    descrip: {type:String,default:''},
    feed: {type:String,default:''},

});