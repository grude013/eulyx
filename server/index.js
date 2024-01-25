
const express = require("express");
const cors = require("cors");

// app: main express application wrapper
// api: express application for /api/**
const app = express();
const api = express();

app.use(cors());
// prepend /api to all routes
app.use("/api", api);

const port = process.env.PORT || 3500; // Get environment variable PORT from process.yml configuration.

// api route /
api.get("/", (req, res) => {
    res.json({ msg: "Hello World!" });
});
// api route /api
api.get("/api", (req, res) => {
    res.json({ msg: "Hello API!" });
})

// listen on port for main express application
app.listen(port, () => {
    console.log("Server is running on port " + port + "...");
});