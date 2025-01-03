var mbd = require('mongoose');
var userSchema =mbd.Schema({
    FirstName:String,
    LastName:String,
    Email:String
})
var user_schema=mbd.model("users",userSchema)
module.exports=user_schema