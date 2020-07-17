const inquirer = require("inquirer");
var fs = require("fs");
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type:"input",
        message:"What is your name?",
        name:"name"
    },
    {
        type:"input",
        message:"What language do you know?",
        name:"languges"
    },
    {
        type:"input",
        message:"What is your preferred method of communciation?",
        name:"Communication"
    }
  ])
  .then(function(response){
    // Use user feedback for... whatever!!
    fs.writeFile("log.txt", JSON.stringify(response), function(err){
        if(err){
            return console.log("There was an error");
        }
        console.log("Success!");
    });
  });
