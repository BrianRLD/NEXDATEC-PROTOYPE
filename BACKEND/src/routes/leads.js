const express = require("express");
const { getLeads } = require("../controllers/leadsController");

const router = express.Router();

router.get("/", getLeads);

module.exports = router;
