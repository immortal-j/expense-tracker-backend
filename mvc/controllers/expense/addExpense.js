const userModel = require("../../models/userModel");

const addExpense = async (req, res) => {
  try {

    let data = await userModel.find({ email: req.body.email });
    if(data.length>0){
         data = data[0];
         data.expenses.push(req.body.expense);
         data.totalspent+=req.body.expense.amount;
          var user = userModel(data);
          await user.save();
          res.status(200).send({"message": "Expenses added successfully"});
    }
    else{
        res.send(500).send({"message":"user not found"});
    }
  } catch (e) {
    res.status(500).send("INTERNAL ERROR");
  }
};

module.exports = { addExpense };
