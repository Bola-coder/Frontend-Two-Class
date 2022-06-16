import React from "react";
import blogs from "./bloglst.js";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>My Blog</h1>
      {blogs.map((blog) => (
        <div key={blog.id} style={{ padding: "20px" }}>
          <Link to={`/blog/${blog.id}`}>
            <h2 style={{ cursor: "pointer" }}>{blog.name}</h2>
          </Link>
          <p>{blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
