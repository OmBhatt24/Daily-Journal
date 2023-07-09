import express from "express";
import { getBlogById } from "../controller/blogs.js";
const router = express.Router();

router.get("/:id", getBlogById);

export default router;
