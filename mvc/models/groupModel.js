const mongoose = require("./conn").mongoose;
const db = require("./conn").db;

const groupSchema = mongoose.Schema({
  name: {
    type: String,
  },
  members:[{
        type:String,
  }],
  transactions: [
    {
        email:String,
        receivers:[{email:String,amount:Number}]
    }
  ]
});
let groupModel = mongoose.model("Group", groupSchema);
module.exports = groupModel;
