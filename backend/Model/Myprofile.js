var mongoose = require('mongoose');
// define our students model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('PortfolioProfile', {
    my_name: {type:String,default:''},
    my_profile: {type:String,default:''},
    my_location: {type:String,default:''},
    my_welcome: {type:String,default:''},
    my_description: {type:String,default:''},
    

});