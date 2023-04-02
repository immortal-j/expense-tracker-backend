const userModel = require("../../models/userModel");

const login = async (req, res) => {
  try {
    console.log(req.body);
    let data = await userModel
      .find({ email: req.body.email, password: req.body.password })
      .select("_id name email budget totalspent ");
      console.log(data);
    if(data.length>0)
    res.send(data[0]);
    else
    res.status(500).send({"message":"Invalid username or password"})
  } catch (e) {
    res.status(500).send("INTERNAL ERROR");
  }
};

module.exports = { login };
