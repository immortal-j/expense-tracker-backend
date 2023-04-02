const userModel = require("../../models/userModel");

const addExpense = async (req, res) => {
  try {

    var data = await userModel.find({ email: req.body.email });
    if(data.length>0){
         data = data[0];
         const today = new Date();
         const yyyy = today.getFullYear();
         let mm = today.getMonth() + 1; // Months start at 0!
         let dd = today.getDate();

         if (dd < 10) dd = "0" + dd;
         if (mm < 10) mm = "0" + mm;

         time =
           dd +
           "/" +
           mm +
           "/" +
           yyyy +
           " " +
           today.getHours() +
           ":" +
           today.getMinutes();
         expense={...req.body.expense,date:time}
         data.expenses.push(expense);
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
