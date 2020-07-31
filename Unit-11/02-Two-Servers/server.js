var http = require("http");
var Port = 7000;
var Port2 = 7500;
function handleRequests(request,response){
    response.end("It Works!! Path Hit: " + request.url);
}
function handleRequests2(request,response){
    response.end("It Works!! Path Hit: " + request.url);
}

var server1 = http.createServer(handleRequests);
var server2 = http.createServer(handleRequests2);

server1.listen(port, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + Port);
  });
  server2.listen(port2, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + Port2);
  });