const express = require("express");
const app = express();
const path = require("path");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const cors = require("cors");
const createRouter = require("./helpers/create_router.js");

app.use(cors())
app.use(bodyParser.json());

MongoClient.connect("mongodb://localhost:27017")
.then((client) => {
  const db = client.db("spacexServer");
  const collection = db.collection("missions")
  app.use("/api/missions", createRouter(collection))
})
.catch(console.error);
app.listen(3000, function() {
  console.log(`Space X server running on port ${this.address().port}`)
});
