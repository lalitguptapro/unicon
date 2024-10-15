const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer"); // Import Multer
const path = require("path");
const fs = require("fs");
const Blog = require("./models/Blog");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Create uploads folder if it doesn't exist
if (!fs.existsSync("./uploads")) {
  fs.mkdirSync("./uploads");
}

// Set up Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // Destination folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Create a unique name for each file
  },
});

const upload = multer({ storage });

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/blog-dashboard", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Serve the uploads folder statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Create a new blog post with file upload
app.post("/api/blogs", upload.single("image"), async (req, res) => {
  const { title, content, category, author, para, readbtn } = req.body;
  const image = req.file
    ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
    : "";

  try {
    const blog = new Blog({
      title,
      content,
      category,
      author,
      para,
      readbtn,
      image,
    });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create blog post" });
  }
});

// Update a blog post
app.put("/api/blogs/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content, image, category, author, para, readbtn } = req.body; // Include new fields
  try {
    const blog = await Blog.findByIdAndUpdate(
      id,
      { title, content, image, category, author, para, readbtn },
      { new: true }
    );
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: "Failed to update blog post" });
  }
});

// Get all blog posts
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

// Update a blog post
// app.put("/api/blogs/:id", async (req, res) => {
//   const { id } = req.params;
//   const { title, content } = req.body;
//   try {
//     const blog = await Blog.findByIdAndUpdate(
//       id,
//       { title, content },
//       { new: true }
//     );
//     if (!blog) return res.status(404).json({ error: "Blog not found" });
//     res.status(200).json(blog);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to update blog post" });
//   }
// });

// Delete a blog post
app.delete("/api/blogs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete blog post" });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
