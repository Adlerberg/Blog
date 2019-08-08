import React, { useState, useEffect } from "react";
import axios from "./axios";

const Post = props => {
  const { id } = props;
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`/posts/${id}`).then(response => {
      const postData = response.data;
      setPost(postData);
      axios.get(`/users/${postData.userId}`).then(response => {
        const userName = response.data.name;
        setAuthor(userName);
      });
    });
    axios.get(`/comments?postId=${id}`).then(response => {
      const commentsList = response.data;
      setComments(commentsList);
    });
  }, [id, setAuthor, setComments]);

  return (
    <div className="post" key="post.id">
      {post.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className="post-data">
          <h1 className="title">{post.title}</h1>
          <h2 className="author">{`by ${author}`}</h2>
          <p className="body">{post.body}</p>
        </div>
      )}
      {comments.length === 0 ? (
        <h1></h1>
      ) : (
        <div className="comment">
          {comments.map(comment => (
            <div className="comment-data" key={comment.id}>
              <h1 className="name">{comment.name}</h1>
              <span className="by">{`by ${comment.email}`}</span>
              <p className="body">{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
