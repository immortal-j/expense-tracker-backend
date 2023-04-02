const userModel = require("../../models/userModel");

const editExpense = async (req, res) => {
  try {
    let data = await userModel.find({ email: req.body.email });
    if (data.length > 0) {
      data = data[0];
      data.totalspent -= data.expenses[req.body.index].amount;
      data.totalspent += req.body.expense.amount;
      console.log(data);
      data.expenses[req.body.index]=req.body.expense;
      var user = userModel(data);
      await user.save();
      res.status(200).send({ message: "Expense edited successfully" });
    } else {
      res.send(500).send({ message: "user not found" });
    }
  } catch (e) {
    res.status(500).send("INTERNAL ERROR");
  }
};

module.exports = { editExpense };
