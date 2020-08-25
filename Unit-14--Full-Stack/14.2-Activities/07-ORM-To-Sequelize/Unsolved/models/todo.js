module.exports = function(sequelize, DataTypes){
    let Todo = sequelize.define("todos", {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    });
    return Todo;
}