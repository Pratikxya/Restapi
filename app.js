import express from "express"; //imports the package express
import mongoose from "mongoose"; //imports the package mongoose
import "dotenv/config"; //imports the package dotenv

const app = express(); //executes the express function

//ROUTES
app.get("/posts", (req, res) => res.send("Hello World!"));

//lISTENS TO THE SERVER

const port = process.env.port || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));

//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("Connected to DB")
);
