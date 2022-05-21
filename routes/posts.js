import express from "express";

const router = express.Router();
const app = express();

//ROUTES
router.get("/", (req, res) => res.send("Hello World!"));

export default router;
