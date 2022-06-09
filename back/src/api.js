const express = require("express");
const app = express.Router();
app.use(express.json());
app.post("/connect", (req, res) => {
  const login = req.body.login;
  if(login !== "Juju") {
    res.status(401).end();
  }
  res.json({
    displayName: login
  })
});

module.exports = app;
