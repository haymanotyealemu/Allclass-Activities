// require the HTTP module
var http = require("http");
// Then define the ports we want to listen to
var PORTONE = 7000;
var PORTTWO = 7500;
function handleRequests(request,response){
    response.end("It Works!! Path Hit: " + request.url);
}
function handleRequests2(request,response){
    response.end("It Works!! Path Hit: " + request.url);
}

var server1 = http.createServer(handleRequests);
var server2 = http.createServer(handleRequests2);

server1.listen(PORTONE, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORTONE);
  });
  server2.listen(PORTTWO, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORTTWO);
  });