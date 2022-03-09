const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: { type: String, unique: true, required: true },
  race: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, min: 0, max: 100, required: true },
  hp: { type: Number, min: 0, max: 5000, required: true },
  mana: { type: Number, min: 0, max: 10000, required: true },
  level: { type: Number, min: 0, max: 100, required: true },
  class: { type: String, required: true },
  skills: [
    {
      name: String,
      effectDuration: { type: Number, min: 0, max: 10000 },
      manaCost: { type: Number, min: 0, max: 10000 },
      cooldown: { type: Number, min: 0, max: 300 },
    },
  ],
});

module.exports = mongoose.model("character", CharacterSchema);
