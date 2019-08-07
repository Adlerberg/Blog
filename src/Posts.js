import React, { useState, useEffect } from "react";
import axios from "./axios";
import { Link } from "@reach/router";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("posts/").then(response => {
      const postsList = response.data;
      setPosts(postsList);
    });
  }, [setPosts]);

  return (
    <div className="posts">
      {posts.length === 0 ? (
        <h1>Posts not found</h1>
      ) : (
        posts.map(post => {
          return (
            <Link to={`/post/${post.id}`} key={post.id}>
              <div className="post">
                <h1>{post.title}</h1>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Posts;
