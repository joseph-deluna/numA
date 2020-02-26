var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/num_A", {useNewUrlParser: true, useUnifiedTopology: true});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
// app.use(methodOverride("_method"));

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
  });
  var User = mongoose.model("User", userSchema);

var cropSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
  });
  var Crop = mongoose.model("Crop", cropSchema);




app.get("/", function(req, res){
    res.render("index");
});


app.get("/user", function(req, res){
    res.render("user")
});



app.get("/crops", function(req, res){
    res.render("crops")
});


app.listen(3000, function(){
    console.log("port 3000 started");
});