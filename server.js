const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('json spaces', 2);

//DB config
const db = require("./config/keys").mongoURI;
//Connect to mongoDB
mongoose
  .connect(
    db, { useNewUrlParser: true }
  )
  .then(() => console.log("mongoDB connected"))
  .catch(error => console.log(error));

app.get("/", (req, res) => res.send("Hi There!!"));

//Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
