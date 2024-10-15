const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false // Optional field
  },
  category: {
    type: String,
    required: false // Optional field
  },
  author: {
    type: String,
    required: false // Optional field
  },
  para: {
    type: String,
    required: false // Optional field
  },
  readbtn: {
    type: String,
    required: false // Optional field
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Blog', BlogSchema);
