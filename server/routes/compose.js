import express from "express";
import { createBlog } from "../controller/blogs.js";
const router = express.Router();

router.post("/", createBlog);

export default router;
