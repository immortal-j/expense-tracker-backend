const groupModel = require("../../models/groupModel");
const userModel = require("../../models/userModel");

const addGroup = async (req, res) => {
  try {
    let user = await userModel
      .find({ email: req.body.email });
    
    var obj={
        "name": req.body.name,
        "members":[user[0].email],
        "transactions":[{"email":req.body.email,"receivers":[]}],
    }
    var group = groupModel(obj);
    group=await group.save();
    console.log(user[0]);
    user[0].groups.push(group._id);
   
    user=userModel(user[0]);
    await user.save();

    res.status(200).send({ message: "Group added successfully" });
  } catch (e) {
    res.status(500).send("INTERNAL ERROR");
  }
};

module.exports = { addGroup };
