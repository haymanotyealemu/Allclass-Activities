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
    connection.end();
  });
function promptingUser() {
    inquirer.prompt([
        {
            type:"list",
            message:"Choose weather you would like to POST AN ITEM or BID ON AN ITEM",
            name:"item",
            choices:["POST ON AN ITEM","BID ON AN ITEM"]
        },
        // The following questions are derived based on the above employee Role
        {
            type:"input",
            message:"What is the name of the item?",
            name:"name",
            when: (userInput) => userInput.item === "POST ON AN ITEM"
        },
        {
            type:"input",
            message:"How many item you would like to post?",
            name:"quantity",
            when: (userInput) => userInput.item === "POST ON AN ITEM"
        },
        {
            type:"input",
            message:"What is the price?",
            name:"price",
            when: (userInput) => userInput.item === "POST ON AN ITEM"
        }


    ]).then(answers => {
        // Here we create a new employee object using classes (Engineer and Intern) and push the to the 
        }
    )};