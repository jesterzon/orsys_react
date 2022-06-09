const express = require("express");
const morgan = require("morgan");
const serveIndex = require("serve-index");
const app = express();
const port = 3000;
const api = require('./api.js')

app.use(morgan("tiny"));

app.use("/api", api);

app.use(express.static("./public"));

app.use(serveIndex("./public", { icons: true }));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
