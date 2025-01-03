var express = require("express");
var path = require("path");
var app = express();
var mbd = require("mongoose");
var User = require("./models/users");
const { error } = require("console");
const PORT = 3002;
app.use(express.json())
mbd
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("Mongodb connection successful");
  })
  .catch(() => {
    console.log("check your connection string");
  });
app.get("/", (req, res) => {
  res.send("welcome to backend server");
});
app.get("/json", (req, res) => {
  res.json("welcome to backend ");
});
app.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  var { FirstName, LastName, Email } = req.body;
  console.log(FirstName, LastName, Email);
  try {
    var newUser = new User({
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
    });
    newUser.save();
    console.log("UserAdded Successfully");
    res.status(200).send("User added successfully");
  } catch (err) {
    console.log(err);
  }
});

app.get('/getsignup',async(req,res)=>
{
    try{
        var allSignUpRecords = await User.find()
        res.json(allSignUpRecords)
        console.log("All Data Fetched");

    }
    catch(err)
    {
        console.log("cannot able to read the records");
    }
})


app.listen(PORT, () => {
  console.log(`backend server started\nUrl: http://localhost:${PORT}`);
});
