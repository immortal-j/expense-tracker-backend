const express = require("express");
const { addGroup } = require("../controllers/group/addGroup");
const { addGroupExpense } = require("../controllers/group/addGroupExpense");
const { addGroupMember } = require("../controllers/group/addGroupMember");
const { getGroups } = require("../controllers/group/getGroups");

let routes = express.Router();
routes.post("/addgroup", addGroup);
routes.post("/addgroupmember",addGroupMember);
routes.post("/addgroupexpense",addGroupExpense);
routes.post("/getgroups", getGroups)
module.exports = routes;
