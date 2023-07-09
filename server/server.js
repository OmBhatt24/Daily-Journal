import express from "express";
import mongoose from "mongoose";
import blogRoutes from "./routes/blogs.js";
import postRoutes from "./routes/posts.js";
import composeRoutes from "./routes/compose.js";
const app = express();
import cors from "cors";
app.use(express.json());
app.use(cors());
mongoose
  .connect("mongodb://0.0.0.0:27017/BlogsDB")
  .then(() => console.log("connected to db successfully"))
  .then(() => {
    // Blog.insertMany(data);
  });
// const Blog = mongoose.model("blog", blogSchema);
app.use("/", blogRoutes);
app.use("/posts", postRoutes);
app.use("/compose", composeRoutes);
app.listen(4000, () => console.log("server is running at port 4000"));
