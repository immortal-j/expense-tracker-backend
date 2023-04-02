const express = require('express');
const userRoutes = require('./mvc/routes/userRoutes');
const expenseRoutes = require('./mvc/routes/expenseRoutes');
const groupRoutes = require('./mvc/routes/groupRoutes');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use("/users",userRoutes);
app.use("/expenses",expenseRoutes);
app.use("/group",groupRoutes);
app.listen(3000,()=>{
    console.log('listening on 3000');
})