
var express = require('express');
var path = require('path');// path to locate a folder
var app = express();

// Set view engine folder
app.set('view engine', 'ejs')
app.set('view cache', false);

// Define the port to run on
const port = process.env.PORT || 3001
app.set('port', port);

//app.use('/public', express.static(path.join(__dirname + '/public')));
//connects the path to the static pages
//when express receives a request for a route
//it will see if the file path exists in the directory
//matches routes that start with public
//app.use(express.static(path.join(__dirname + '/public')));
app.use('/public', express.static('public'))

app.get("/", function(req, res){
    res.render("index.ejs", {});
})

app.get("/abt", function(req, res){
    res.render("about.ejs");
})

app.get("/kntkto", function(req, res){
    res.render("contact.ejs");
})

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});