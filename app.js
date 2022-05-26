import express from "express"; //imports the package express
import mongoose from "mongoose";
import "dotenv/config";
import bodyParser from "body-parser";

const app = express(); //executes the express function

//Import Routes
import postsRoute from "./routes/posts.js";

//ROUTES MIDDLEWARES
app.use(bodyParser.json());

app.use("/posts", postsRoute);

//lISTENS TO THE SERVER

const port = process.env.port || 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));

//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to DB")
);
