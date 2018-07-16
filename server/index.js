require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const app = express();
const port = 3001;

const ctrl = require("./controller");

app.use(json());

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.get("/api/houses", ctrl.get);
app.post("/api/houses", ctrl.add);
app.delete("/api/houses/:id", ctrl.deleteHome);

app.listen(port, () => {
  console.log(`Port is running on: ${port}`);
});
