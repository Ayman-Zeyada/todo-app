const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const todos = require("./routes/api/todos");
const app = express();
const db = require("./config/keys").mongoURI;
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose
  .connect(db)
  .then(() => console.log("mongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/api/todos", todos);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist/client"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "client", "index.html"));
  });
}

app.listen(port, () => console.log(`Server started on port ${port}`));
