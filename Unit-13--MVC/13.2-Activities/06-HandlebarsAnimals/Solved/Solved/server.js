const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const animals = [
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

// BONUS: Update this to use a dynamic route that allows users to search for any animal type
app.get("/dog", (req, res) => {
	res.render("animal", animals[0]);
});

app.get("/all-pets", (req, res) => {
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

app.get("/all-non-pets", (req, res) => {
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

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
