// blog.controller.js (API Controller for fetching blogs)
const Blog = require("../models/Blog");

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find(); // Fetch all fields by default
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs", error });
  }
};

module.exports = { getBlogs };  
