import express from "express";
import postModel from "../models/Post.js";

const router = express.Router();
const app = express();

//ROUTES
router.get("/", (req, res) => res.send("Hello World!"));

router.post("/", async (req, res) => {
  console.log(req.body);
  const post = new postModel({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
