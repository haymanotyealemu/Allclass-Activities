var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "haymilove@2012",
  database: "playlistDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllSongs();
  queryDanceSongs();
});

function queryAllSongs() {
  connection.query("SELECT * FROM songs", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("-----------------------------------");
  });
}

// What if I want to find all artists that have rew in their name?
// What if our user searches for an artist?
function queryDanceSongs(artist) {
  var query = connection.query("SELECT * FROM songs WHERE artist=?", [artist], function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
  });

  // logs the actual query being run
  console.log(query.sql);
  connection.end();
}
