const mongoose = require("./conn").mongoose;
const db = require("./conn").db;

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  budget: {
    type: Number,
    default:0
  },
  totalspent: {
    type: Number,
    default:0
  },
  expenses: [
    {
      amount: Number,
      title: String,
      description:String,
      date: String,
    } ,
  ],
  groups: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
    },
  ],
  
});
let userModel = mongoose.model("User", userSchema);
module.exports = userModel;
