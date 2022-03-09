const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = 4000;

const CharactersController = require("./controllers/Characters");

mongoose
  .connect("mongodb://localhost:27017/characterdb", { autoIndex: true })
  .then(() => {
    console.log("Connected to database.");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.get("/api/characters", CharactersController.retrieve); //Get all characters.
app.get("/api/characters/:id", CharactersController.retrieveById); //Get a character by his id.
app.post("/api/characters", CharactersController.create); //Create a new character.
app.patch("/api/characters/:id", CharactersController.update); //Update a character by his id.
app.delete("/api/characters/:id", CharactersController.delete); //Delete a character by his id.

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}!`);
});

// app.get("/", (req, res, next) => {
//   WilderModel.init().then(() => {
//     const newWilder = new WilderModel({
//       name: "Minnie",
//       age: 21,
//       city: "Paris",
//       skills: [{ title: "PHP", votes: 10 }],
//     });
//     newWilder
//       .save()
//       .then((result) => {
//         console.log("success:", result);
//         res.json(result);
//       })
//       .catch((err) => {
//         console.log("error:", err);
//       });
//   });
// });

// app.get("/wilders", (req, res, next) => {
//   Wilder.find({}, (err, wilders) => {
//     let wilderMap = {};
//     wilders.forEach((wilder) => {
//       wilderMap[wilder._id] = wilder;
//     });
//     res.send(wilderMap);
//   });
// });

// app.get("/wilders", (req, res, next) => {
//   WilderModel.find({})
//     .then((result) => {
//       console.log("success", result);
//       res.json(result);
//     })
//     .catch((err) => {
//       console.log("error", err);
//     });
// });

// app.get("/:id", (req, res, next) => {
//   let id = req.params.id;
//   WilderModel.findById({ id })
//     .then((result) => {
//       console.log("success", result);
//       res.json(result);
//     })
//     .catch((err) => {
//       console.log("error", err);
//     });
// });
