const express = require("express");
const { generateMetadata } = require("../controllers/nftController");

const router = express.Router();

router.post("/metadata/:leadId", generateMetadata);

module.exports = router;
