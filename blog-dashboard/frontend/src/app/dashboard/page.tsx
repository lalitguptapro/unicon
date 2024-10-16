"use client"; // Client component directive

import { useState, useEffect } from "react";
import axios from "axios";
import BlogForm from "../../components/BlogForm";

interface Blog {
  _id: string;
  title: string;
  category: string;
  author: string;
  para: string;
  content: string;
  image?: string;
}

const Home: React.FC = () => {    
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get<Blog[]>("http://localhost:5000/api/blogs");
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className='container'>
      <h1>Blog Dashboard</h1>
      <div className='blog-form'>
        <BlogForm
          existingBlog={editingBlog}
          onSuccess={() => {
            fetchBlogs();
            setEditingBlog(null);
          }}
        />
      </div>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id} className='blog-item'>
            {blog.image && (
              <img src={blog.image} alt={blog.title} className='blog-image' />
            )}
            <h2>{blog.title}</h2>
            <p>Category: {blog.category}</p>
            <p>Author: {blog.author}</p>
            <p>{blog.para}</p>
            <p>{blog.content}</p>
            <button onClick={() => setEditingBlog(blog)}>Edit</button>
            <button onClick={() => handleDelete(blog._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
