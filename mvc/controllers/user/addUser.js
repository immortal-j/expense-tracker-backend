const userModel = require("../../models/userModel");

const addUser = async (req, res) => {
  try {
    var data={...req.body,date:new Date()}
    console.log(req.body);
    var user = userModel(data);

    await user.save();

    res.status(200).send({ message: "User saved successfully" });
  } catch (e) {
    res.status(500).send("INTERNAL ERROR");
  }
};

module.exports = { addUser };
