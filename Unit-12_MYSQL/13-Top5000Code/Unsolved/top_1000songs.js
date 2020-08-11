var mysql = require("mysql");
var connection = mysql.createConnection({
	host: "localhost",

	// Your port; if not 3306
	port: 3306,

	// Your username
	user: "root",

	// Your password
	password: "haymilove@2012",
	database: "top_songsdb"
});
connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
    querysongBysa();
    // queryDanceSongs();
});
function querysongBysa() {
    var query = connection.query("SELECT * FROM top5000 WHERE song=?", [song], function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].position + " | " + res[i]. artist + " | " + res[i].song + " | " + res[i].year + " | " + res[i].raw_total + " | " + res[i].raw_usa + " | " + res[i].raw_uk + " | " + res[i].raw_eur + " | " + raw_row );
      }
    });
    console.log(query.sql);
    connection.end();
}