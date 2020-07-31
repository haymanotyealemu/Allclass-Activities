var http = require("http");
var fs = require("fs");

var PORT = 8080;
var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

function handleRequest(req, res){
    var path = req.url;
    switch (path) {
    case "/":
    return displayRoot(res);
    case "/Favorite Foods":
    return displayFoods(res);
    case "/Favorite Movies":
    return displayMovie(res);
    case "/Favorite CSS":
    return displayCSS(res);
    default:
    return display404(path, res);
    }
}
//// When someone visits the "http://localhost:8080/" path, this function is run.
function displayRoot(res) {
    var Home = "<html>" +
      "<body><h1>Home Page</h1>" +
      "</body></html>";
  
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { "Content-Type": "text/html" });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(Home);
  }
  