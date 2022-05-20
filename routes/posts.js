import express from "express";

const router = express.Router();

//ROUTES
app.get("/posts", (req, res) => res.send("Hello World!"));

export default router;
