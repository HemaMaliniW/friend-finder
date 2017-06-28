// ===============================================================================
// LOAD DATA
// We are linking our routes to the "data" source.
// This data source hold arrays of information on friend-data, waitinglist, etc.
// ===============================================================================

var friendArray = require("../data/friendArray");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when a users "visits" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the friend)
  // ---------------------------------------------------------------------------

  app.get("/api/friend", function(req, res) {
    res.json(friendArray);

    console.log(result);
  });

  
  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friend array)
  // ---------------------------------------------------------------------------

  app.post("/api/friend", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a friend or not.
    // It will do this by sending out the value "true" have a friend

    console.log(req);
    console.log(req.body);
    if (friendArray.length < 5) {
      friendArray.push(req.body);
      res.json(true);
    }
    else {("Sorry you are alone!" + friend)
      
         }
  });

    app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendArray = [];

    console.log(friendArray);
  });
};
