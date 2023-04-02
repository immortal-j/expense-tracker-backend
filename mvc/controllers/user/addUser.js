const userModel = require("../../models/userModel");

const addUser = async (req, res) => {
  try {
    var user = userModel(req.body);
    await user.save();

    res.status(200).send({ message: "User saved successfully" });
  } catch (e) {
    res.status(500).send("INTERNAL ERROR");
  }
};

module.exports = { addUser };
