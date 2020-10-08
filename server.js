const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require('config');

const app = express();
const db = config.get('mongoURI');
const port = process.env.PORT || 5000;

app.use(express.json());

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("mongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/api/todos", require("./routes/api/todos"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist/client"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "client", "index.html"));
  });
}

app.listen(port, () => console.log(`Server started on port ${port}`));
