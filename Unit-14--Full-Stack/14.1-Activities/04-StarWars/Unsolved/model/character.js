// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Characters = sequelize.define("allcharacters", {
    id:{
        type: Sequelize.INTEGER, 
        key: Sequelize.P

    },
    routeName:{
        type: Sequelize.STRING
    },
    name: Sequelize.STRING,
    role:Sequelize.STRING,
    age:Sequelize.NUMBER,
    forcePoints:Sequelize.NUMBER
});
allcharacters.sync();
module.exports = Characters;
