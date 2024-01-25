const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 3500; // Get environment variable PORT from process.yml configuration.

app.get("/", (req, res) => {
    res.json({ msg: "Hello World!" });
});

app.get("/api", (req, res) => {
    res.json({ msg: "Hello API!" });
})

app.listen(port, () => {
    console.log("Server is running on port " + port + "...");
});