import { useState } from "react";
import axios from "axios";
import styles from "./BlogForm.module.css";

const BlogForm = ({ existingBlog, onSuccess }) => {
  const [title, setTitle] = useState(existingBlog?.title || "");
  const [content, setContent] = useState(existingBlog?.content || "");
  const [image, setImage] = useState(null); // Store the file, not just the path
  const [category, setCategory] = useState(existingBlog?.category || "");
  const [author, setAuthor] = useState(existingBlog?.author || "");
  const [para, setPara] = useState(existingBlog?.para || "");
  const [readbtn, setReadbtn] = useState(existingBlog?.readbtn || "");
  const [imagePreview, setImagePreview] = useState(existingBlog?.image || null);
  const handleImageChange = e => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("author", author);
    formData.append("para", para);
    formData.append("readbtn", readbtn);
    if (image) formData.append("image", image);

    try {
      if (existingBlog) {
        await axios.put(
          `http://localhost:5000/api/blogs/${existingBlog._id}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      } else {
        await axios.post("http://localhost:5000/api/blogs", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      onSuccess();
    } catch (error) {
      console.error("Error saving blog", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* File Input for Image */}
      <input type='file' accept='image/*' onChange={handleImageChange} />
      {imagePreview && (
        <img src={imagePreview} alt='Preview' className={styles.imagePreview} />
      )}

      {/* Other form inputs (title, category, author, etc.) */}
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='Category'
        value={category}
        onChange={e => setCategory(e.target.value)}
      />
      <input
        type='text'
        placeholder='Author'
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <textarea
        placeholder='Short Description (Para)'
        value={para}
        onChange={e => setPara(e.target.value)}
      />
      <input
        type='text'
        placeholder='Read Button Text'
        value={readbtn}
        onChange={e => setReadbtn(e.target.value)}
      />
      <textarea
        placeholder='Content'
        value={content}
        onChange={e => setContent(e.target.value)}
      />

      <button type='submit'>
        {existingBlog ? "Update Blog" : "Create Blog"}
      </button>
    </form>
  );
};

export default BlogForm;
