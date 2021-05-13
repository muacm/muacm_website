
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../Styles/main.css";


import BlogDetails from "../utils/blogs";
import BlogCard from "../Components/BlogCard/BlogCard";

import React, { useState } from "react";

const Blogs = () => {
  const [blog_data] = useState(BlogDetails.Blogs);
  return (
    <div className="Blogs">
      <h2>
        Blogs
      </h2>
      <div className="blog-card-container">
        {blog_data.map((data, index) => (
          <BlogCard BlogCard_Details={data} />
        ))}
      </div>
    </div>
  )
};

export default Blogs;