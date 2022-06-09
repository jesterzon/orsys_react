const express = require("express");
const morgan = require("morgan");
const serveIndex = require("serve-index");
const session = require("express-session");
const app = express();
const port = 3000;
const api = require("./api.js");

app.use(morgan("tiny"));
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use("/api", api);

app.use(express.static("./public"));

app.use(serveIndex("./public", { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
