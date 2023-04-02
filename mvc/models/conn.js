const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const url = 'mongodb://localhost:27017/expensetracker';

mongoose.connect(url).then(()=>{
    console.log(
        'Connected to DB'
    )
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
module.exports = { db, mongoose };
