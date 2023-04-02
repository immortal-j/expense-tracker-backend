const groupModel = require("../../models/groupModel");
const userModel = require("../../models/userModel");

const addGroupMember = async (req, res) => {
  try {
    let owner = await userModel.find({ email: req.body.email });
    let newmember = await userModel.find({ email: req.body.newmembermail });
    let group = await groupModel.find({ _id: req.body.groupid });
    group = group[0];
     console.log(newmember[0]._id);
    group.members.push(newmember[0].email);
 
    for (let i = 0; i < group.transactions.length; i++) {
      group.transactions[i].receivers.push({ email: req.body.newmembermail, amount: 0 });
    }
      console.log("hi");
    var receivers = [];
    for (let i = 0; i < group.transactions.length; i++) {
      receivers.push({ email: group.transactions[i].email, amount: 0 });
    }
    group.transactions.push({ email: req.body.newmembermail, receivers: receivers });

    group = groupModel(group);
    group = await group.save();
    newmember[0].groups.push(group._id);

    newmember = userModel(newmember[0]);
    await newmember.save();

    res.status(200).send({ message: "Group Member added successfully" });
  } catch (e) {
    res.status(500).send("INTERNAL ERROR");
  }
};

module.exports = { addGroupMember };
