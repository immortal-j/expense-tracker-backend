const userModel = require("../../models/userModel");

const deleteExpense = async (req, res) => {
  try {
    let data = await userModel.find({ email: req.body.email });
    if (data.length > 0) {
      data = data[0];

      data.totalspent -= data.expenses[req.body.index].amount;
      data.expenses.splice(req.body.index,1);
     
      var user = userModel(data);
      await user.save();
      res.status(200).send({ message: "Expense deleted successfully" });
    } else {
      res.send(500).send({ message: "user not found" });
    }
  } catch (e) {
    res.status(500).send("INTERNAL ERROR");
    return;
  }
};

module.exports = { deleteExpense };
