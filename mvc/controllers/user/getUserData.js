const userModel = require("../../models/userModel");

const getUser = async (req, res) => {
  try {
    let data = await userModel
      .find({ email: req.body.email })
      .select("_id name email budget totalspent");
    res.send(data[0]);
  } catch (e) {
    res.status(500).send("INTERNAL ERROR");
  }
};

module.exports = { getUser };
