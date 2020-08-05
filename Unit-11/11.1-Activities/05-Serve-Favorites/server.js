var http = require("http");
var fs = require("fs");

var PORT = 8080;
var server = http.createServer(handleRequest);

// server.listen(PORT, function() {
//     console.log("Server listening on: http://localhost:" + PORT);
// });

function handleRequest(req, res){
  // Capture the url the request is made to
    var path = req.url;
    switch (path) {
    case "/food":
    return fs.readFile(__dirname + "/food.html" , function(err, data){
      if (err) throw err;
      res.writeHead(200,{
        "Content-Type": "text/html" 
      });
      res.end(data);
    });
    case "/movies":
    return fs.readFile(__dirname + "/movies.html" , function(err, data){
      if (err) throw err;
      res.writeHead(200,{
        "Content-Type": "text/html" 
      });
      res.end(data);
    });
    case "/frameworks":
    return fs.readFile(__dirname + "./frameworks.html", function(err, data){
      if(err) throw err;
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(data);
      
    });
    // default to rendering index.html, if none of above cases are hit
    default:
      return fs.readFile(__dirname + "./index.html" , function(err, data){
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
  }
}
var server = http.createServer(handleRequest);


// Starts our server.
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});