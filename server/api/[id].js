const Pets = require('../model/pets');

module.exports = async (req, res) => {
  try {
    const pets = await Pets.findOne({_id: req.query.id});
    res.send(pets);
  } catch {
    res.status(404);
    res.send({error: "ID non-existent"});
  }
};

