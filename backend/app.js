var express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
var db = require("./config/db");
const { default: mongoose } = require("mongoose");
console.log("connecting--", db);
mongoose.connect(db.url);
app.use(express.json())
app.get("/", (req, res) => {
  console.log("hello")
  res.send("working");
});
let Contactuse=require('./Model/ContactedUsers')
app.post("/", (req, res) => {
  const value =req.body;
  console.log(value);
  const newuser=new Contactuse(value);
  newuser.save();
  res.send(true);

});

app.listen(4000, () => {
  console.log(`http://localhost:9000`);
});
