require("dotenv").config();
const express = require("express");
const cors = require("cors");

const leadsRoutes = require("./src/routes/leads");
const nftRoutes = require("./src/routes/nft");

const app = express();
app.use(cors());
app.use(express.json());

// rutas
app.use("/api/leads", leadsRoutes);
app.use("/api/nft", nftRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`🚀 Backend running on port ${port}`));
