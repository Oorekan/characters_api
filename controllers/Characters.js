const CharacterModel = require("../models/Character");

module.exports = {
  //Get all characters.
  retrieve: async (req, res) => {
    try {
      const getCharacters = await CharacterModel.find({});
      if (!getCharacters)
        res.json({ success: false, message: "Nobody came..." });
      res.json({ success: true, result: getCharacters });
    } catch (err) {
      res.json({ success: false, error: err });
    }
  },
  //Get a character by his id.
  retrieveById: async (req, res) => {
    try {
      const getCharacterById = await CharacterModel.findById({
        _id: req.params.id,
      });
      if (!getCharacterById)
        res.json({ success: false, message: "No one came..." });
      res.json({ success: true, result: getCharacterById });
    } catch (err) {
      res.json({ success: false, error: err });
    }
  },
  //Create a new character.
  create: async (req, res) => {
    try {
      const createCharacter = await new CharacterModel({
        name: req.body.name,
        race: req.body.race,
        gender: req.body.gender,
        age: req.body.age,
        hp: req.body.hp,
        mana: req.body.mana,
        level: req.body.level,
        class: req.body.class,
        skills: req.body.skills,
      });
      await createCharacter.save();
      res.json({ success: true, result: createCharacter });
    } catch (err) {
      res.json({ success: false, error: err });
    }
  },
  //Update a character by his id.
  update: async (req, res) => {
    try {
      const updateOperation = await CharacterModel.updateOne(
        { _id: req.params.id },
        req.body
      );
      if (!updateOperation)
        res.json({
          success: false,
          message: "This character does not exist!",
        });
      const getUpdatedCharacter = await CharacterModel.findById({
        _id: req.params.id,
      });
      res.json({ success: true, result: getUpdatedCharacter });
    } catch (err) {
      res.json({ success: false, error: err });
    }
  },
  //Delete a character by his id.
  delete: async (req, res) => {
    try {
      const getCharacterInfo = await CharacterModel.findById({
        _id: req.params.id,
      });
      const deleteOperation = await CharacterModel.deleteOne({
        _id: req.params.id,
      });
      if (!deleteOperation)
        res.json({
          success: false,
          message: "A character with such an ID does not exist!",
        });
      res.json({ success: true, result: getCharacterInfo });
    } catch (err) {
      res.json({ success: false, error: err });
    }
  },
};
