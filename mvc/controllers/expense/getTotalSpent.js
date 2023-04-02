const userModel = require("../../models/userModel");

const getTotalSpent = async (req, res) => {
  try {
 var data = await userModel.find({ email: req.body.email });
    if (data.length > 0) {
        
      res.status(200).send({"totalspent": data[0].totalspent});
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

module.exports = { getTotalSpent };
