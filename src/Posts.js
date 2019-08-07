import React, { useState, useEffect } from "react";
import axios from "./axios";
import Post from "./Post";
import { Link } from "@reach/router";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("posts/").then(response => {
      console.log;
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
            <Link to={`/post/${post.id}`}>
              <Post
                key={post.id}
                title={post.title}
                id={post.id}
                userId={post.userId}
              />
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Posts;
