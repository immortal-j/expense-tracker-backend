const userModel = require("../../models/userModel");

const editUser = async (req, res) => {
  try {
    let data = await userModel.find({ email: req.body.email });
    console.log(data);
    data=data[0];
    data.name=req.body.name;
    if(req.body.password)
      data.password=req.body.password;
    data.budget=req.body.budget;
    var user = userModel(data);
    await user.save();

    res.status(200).send({ message: "User edited successfully" });
  } catch (e) {
    res.status(500).send("INTERNAL ERROR");
  }
};

module.exports = { editUser };
