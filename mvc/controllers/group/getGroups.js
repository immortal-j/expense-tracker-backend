const groupModel = require("../../models/groupModel");

const getGroups = async (req, res) => {
  try {
    groups = await groupModel.find({ members: req.body.email });
    res.status(200).send(groups);
  } catch (e) {
    res.status(500).send("INTERNAL ERROR");
  }
};

module.exports = { getGroups };
