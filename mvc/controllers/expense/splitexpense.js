const groupModel = require("../../models/groupModel");
const userModel = require("../../models/userModel");

const splitExpense = async (req, res) => {
  try {
    let owner = await userModel.find({ email: req.body.email });
    let group = await groupModel.find({ _id: req.body.groupid });
    group = group[0];
    owner = owner[0];
    var amount = owner.expenses[req.body.index].amount / group.members.length;
    
    owner.totalspent -= owner.expenses[req.body.index].amount;
    
    owner.totalspent += amount;
    
    owner.expenses.splice(req.body.index, 1);
    
    for (let i = 0; i < group.transactions.length; i++) {
      if (group.transactions[i].email == owner.email) {
        for (let j = 0; j < group.transactions[i].receivers.length; j++) {
          group.transactions[i].receivers[j].amount += amount;
        }
      } else {
        for (let j = 0; j < group.transactions[i].receivers.length; j++) {
          if (group.transactions[i].receivers[j].email == owner.email) {
            group.transactions[i].receivers[j].amount -= amount;
          }
        }
      }
    }

    owner = userModel(owner);

    group = groupModel(group);
    group = await group.save();

    owner = await owner.save();
    res.status(200).send({ message: "Group Expense successfully" });
  } catch (e) {
    res.status(500).send("INTERNAL ERROR");
  }
};

module.exports = { splitExpense };
