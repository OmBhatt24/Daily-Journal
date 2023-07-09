import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: String,
    post: String,
  },
  { timestamps: true }
);
export default mongoose.model("Blog", blogSchema);
