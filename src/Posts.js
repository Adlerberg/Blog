import React, { useState, useEffect } from "react";
import axios from "./axios";
import { Link } from "@reach/router";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get("posts/").then(response => {
      const postsList = response.data;
      setPosts(postsList);
    });
  }, [setPosts]);

  const perPage = 10;
  const totalPages = Math.ceil(posts.length / perPage);
  return (
    <div className="posts">
      {posts.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        posts.slice((page - 1) * perPage, page * perPage).map(post => {
          return (
            <Link
              to={`/post/${post.id}`}
              className="no-decoration"
              key={post.id}
            >
              <div className="post" key={post.id}>
                <h1>{post.title}</h1>
              </div>
            </Link>
          );
        })
      )}
      <div className="pagination">
        {new Array(totalPages).fill(0).map((_, index) => (
          <button
            key={index}
            className="pagination-item"
            id={index}
            onClick={() => {
              setPage(index + 1);
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Posts;
