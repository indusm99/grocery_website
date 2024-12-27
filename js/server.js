MONGODB FILE
const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://0.0.0.0:27017/login-tut");
connect.then(()=>{
console.log("database connected successfully");
})
.catch((error)=> {
console.log("data base not connected",error);
});
const Loginschema = new mongoose.Schema({
name:{
type:String,
require : true
},
password: {
type:String,
require: true
}
});
const collection = new mongoose.model("users", Loginschema);
module.exports = collection;