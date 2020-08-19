var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  }, {
    animalType: "cat",
    pet: true,
    fierceness: 10
  }, {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  }, {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  }, {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];

app.get("/all-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index handlebars file.

  // 2. Loop through the animals, and send those that are pets to the index handlebars file.
  const dataAnimals = animals.filter((animal) => {
	  return animal.pet;
  })

  const data = {
	  animals: dataAnimals
  };

  res.render("index", data);
});

app.get("/all-non-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index handlebars file.

  // 3. Loop through the animals, and send those that are not pets to the index handlebars file.
	const dataAnimals = animals.filter((animal) => {
		return !animal.pet;
	})

	const data = {
		animals: dataAnimals
	};


  res.render("index", data);
});

// BONUS: Update this to use a dynamic route that allows users to search for any animal type
app.get("/:animal", function(req, res) {
	const animal = animals.filter((animal) => {
		return animal.animalType === req.params.animal;
	})

	res.render("animal", animal[0]);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
