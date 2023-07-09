import Blog from "../model/Blog.js";
export const getAllPosts = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    console.log(req.body);
    const { title, post } = req.body;
    const blog = await Blog({ title, post });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
