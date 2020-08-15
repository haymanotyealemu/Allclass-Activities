const inquirer = require("inquirer");
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "haymilove@2012",
    database: "great_bay_db"
  });
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    // connection.end();
    // run the start function after the connection is made to prompt the user
    start();
  });
function start() {
    inquirer.prompt({
        type:"list",
        message:"Would you like to [POST] an auction or [BID] on an auction?",
        name:"postOrBid",
        choices:["POST ON AN ITEM","BID ON AN ITEM","EXIT"]
    }).then(function(answer){
        if(answer.postOrBid === "POST ON AN ITEM"){
            postAuction();
        }
        else if(answer.postOrBid === "BID ON AN ITEM"){
            bidAuction();
        }
        else{
            connection.end();
        }

    });
        
};
    
    // function to handle posting new items up for auction
function postAuction() {
    // prompt for info about the item being put up for auction
    inquirer.prompt([
        {
            name: "item",
            type: "input",
            message: "What is the item you would like to post?"
        },
        {
            name: "category",
            type: "input",
            message: "What category would you like to place your item in?"
        },
        {
            name: "startingBid",
            type: "input",
            message: "What would you like your starting bid to be?",
            validate: function(value) {
            if (isNaN(value) === false) {
            return true;
            }
            return false;
            }
        }
    ]).then(function(answer){
        connection.query(
            "INSERT INTO auction SET ?",{
                item_name: answer.item,
                category: answer.category,
                starting_bid: answer.startingBid || 0,
                highest_bid: answer.startingBid || 0
            },function(err) {
                if (err) throw err;
                console.log("Your auction was created successfully!");
                start();
            }
        );
      
    });
}
function bidAuction() {
      // query the database for all items being auctioned
    connection.query("SELECT * FROM auction", function(err, results){
        if(err) throw err;

        // once you have the items, prompt the user for which they'd like to bid on
        inquirer.prompt([
            {
                name: "choice",
                type: "rawlist",
                choices: function (){
                    var choiceArray = [];
                    for (var i = 0; i < results.length; i++){
                        choiceArray.push(results[i].item_name);
                    }
                    return choiceArray;
                },
                message: "What auction would you like to place a bid in?"
            },
            {
                name: "bid",
                type: "input",
                message: "How much would you like to bid?"
            }
        ]).then(function(answer){
            // get the information of the chosen item
            var chosenItem;
            for (var i = 0; i < results.length; i++) {
            if (results[i].item_name === answer.choice) {
                chosenItem = results[i];
                    }
                }
            // determine if bid was high enough
            if(chosenItem.highest_bid < answer.bid){
                // bid was high enough, so update db, let the user know, and start over
                connection.query("UPDATE auction SET ? WHERE ?", [
                    {
                        highest_bid: answer.bid
                    },
                    {
                        id: chosenItem.id
                    }
                    ], function(error){
                        if (error) throw err;
                        console.log("Bid placed successfully!");
                    }
                );
            }
            else{
                 // bid wasn't high enough, so apologize and start over
                console.log("Your bid was too low. Try again...");
                start();
            }
        });
    });
}


