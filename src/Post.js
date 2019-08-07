import React, { useState, useEffect } from "react";
import axios from "./axios";

const Post = props => {
  const { title, id, userId } = props;
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
      console.log(commentsList);
    });
  }, [id, userId, setAuthor, setComments]);

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{author}</h2>
      <p>{post.body}</p>
      {comments.length === 0 ? (
        <h1>No comments found</h1>
      ) : (
        comments.map(comment => (
          <div className="comment" key={comment.id}>
            <h1>{comment.name}</h1>
            <p>{comment.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Post;
