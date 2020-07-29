const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);
  const dogs = [];
  const cats = [];
  animalJSON.forEach(animal => {
    if(animal.species === "dogs"){
      dogs.push(animal);
    }
    else{
      cats.push(animal);
    }
  });
  const dogJSON = JSON.stringify(dogs);
  const catJSON = JSON.stringify(cats);
  fs.writeFile("dogs.json", dogJSON,function (err){
    if(err){
      throw err;
    }
    return console.log("succes!");

  });

fs.writeFile("cats.json", catJSON,function (err){
    if(err){
      throw err;
    }
    return console.log("succes!");

  });
  // Create two new arrays to contain the cats and dogs objects
  
});
