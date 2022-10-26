const jojo = require("./jojo");

const express = require("express");

const http = require("http");

const url = require("url");

const path = require("path");

const { text } = require("./jojo");

const { num } = require("./jojo");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(String(Number(req.query.a) + Number(req.query.b)));
});

app.post("/getSum", (req, res) => {
  res.send(String(jojo.num(Number(req.body.a), Number(req.body.b))));
});

app.listen(3000, () => console.log("Starting..."));

// deleted useless code
