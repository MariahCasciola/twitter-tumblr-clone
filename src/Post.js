import React from "react";

function Post({ post }) {
  console.log(post);
  return (
    <div className="post">
      {post.type === "Text" ? (
        <p>{post.content}</p>
      ) : (
        <img src={post.content} alt="" />
      )}
      <button type="delete">Delete</button>
    </div>
  );
}

export default Post;
