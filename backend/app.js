var express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
var db = require("./config/db");
const { default: mongoose } = require("mongoose");
console.log("connecting--", db);
mongoose.connect(db.url);
app.use(express.json())
let Myprofile=require('./Model/Myprofile')
app.get("/", (req, res) => {
  console.log("hello")
  res.send("working");
});
app.get("/admin-detail", (req, res) => {
  Myprofile.find({}).then(function (FoundItems) {

    res.json(FoundItems);

});
});
app.post("/admin-detail", async (req, res) => {
  const data=req.body
  id=data[0].id;
  console.log(`here is my id ${id}`);
  await Myprofile.findByIdAndUpdate(id,data[1]).then((result,resp)=>{
    if(result){
      res.send("data updated")
    }
    else{
      res.send("data Not updated")
    }
  });
  

});

let Contactuse=require('./Model/ContactedUsers')

app.post("/", (req, res) => {
  const value =req.body;
  console.log(value);
  const newuser=new Contactuse(value);
  newuser.save();
  res.send(true);

});
app.post("/login/admin", (req, res) => {
  const value =req.body;
  console.log(value);
  
  res.send(true);

});
let port=4000
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
