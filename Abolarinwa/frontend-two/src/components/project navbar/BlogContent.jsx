import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import blogs from "./bloglst";

function BlogContent() {
  const [newBlog, setNewBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const filterBlog = (id) => {
      if (!newBlog) setNewBlog(blogs.filter((blog) => id === blog.id));
    };

    filterBlog(id);
  }, [id, newBlog]);

  return (
    <div>
      <h2>Blog Content</h2>
      {newBlog ? (
        newBlog.map((blog) => (
          <div key={blog.id} style={{ padding: "20px" }}>
            <h2 style={{ cursor: "pointer" }}>{blog.name}</h2>
            <h4>{blog.author}</h4>
            <em>{blog.content}</em>
          </div>
        ))
      ) : (
        <h1>No blog with this ID</h1>
      )}
    </div>
  );
}

export default BlogContent;
