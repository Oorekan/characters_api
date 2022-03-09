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

app.get("/api/characters/getCharacters", CharactersController.retrieve);
app.get("/api/characters/getCharacter/:id", CharactersController.retrieveById);
app.post("/api/characters/createCharacter", CharactersController.create);
app.patch("/api/characters/updateCharacter/:id", CharactersController.update);
app.delete("/api/characters/deleteCharacter/:id", CharactersController.delete);

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
