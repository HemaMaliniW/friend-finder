// DEPENDENCIES
// provides server with some functioanlity

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// This tells node that we are creating an "express" server
var app = express();

// Sets an initial port to be used in the listener
var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for the server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ROUTER // The below points the server to a series of "route" files.
// These routes give the server a "map" of how to respond when users visit or request data from various URLs.
// User and Server interaction is set up here.

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER
// The below code effectively "starts" the server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
