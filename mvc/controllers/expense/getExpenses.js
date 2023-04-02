const userModel = require("../../models/userModel");

const getExpense = async (req, res) => {
  try {
    let data = await userModel.find({ email: req.body.email });
    if (data.length > 0) {
      res.status(200).send(data[0].expenses);
      return;
    } else {
      res.status(500).send({ message: "user not found" });
      return;
    }
  } catch (e) {
    res.status(500).send("INTERNAL ERROR");
    return;
  }
};

module.exports = { getExpense };
