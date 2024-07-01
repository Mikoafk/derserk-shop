const express = require("express");
const app = express();

const { join } = require("node:path");

const shirts = require("./shirts.json");
const PORT = process.env.PORT || 5000;

app.get("/api/shirts", (req, res) => {
	res.json(shirts);
});

app.post("/api/shirts", (req, res) => {
	console.log("Publicando nueva camisa...");
	console.log(req.body);
});

app.use(express.static(join(__dirname, "./client/build")));

app.get("*", (req, res) => res.sendFile(join(__dirname, "./client/build/index.html")));

app.listen(PORT, () => console.log("Server in PORT:", PORT));
