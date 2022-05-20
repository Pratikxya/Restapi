import express from "express"; //imports the package express
import mongoose from "mongoose"; //imports the package mongoose

const app = express(); //executes the express function

//ROUTES
app.get("/posts", (req, res) => res.send("Hello World!"));

//lISTENS TO THE SERVER

const port = process.env.port || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));

//CONNECT TO DB
mongoose.connect(
  "mongodb+srv://Prati:<x09isLkkt0GowMZ1>@cluster0.n0zcg.mongodb.net/test",
  () => console.log("Connected to DB")
);
