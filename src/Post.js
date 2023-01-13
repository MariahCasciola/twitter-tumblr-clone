import React from "react";

function Post({ post, posts, setPosts }) {
  //   console.log(post);
  const deleteHandler = () => {
    const filteredPosts = posts.filter((currentPost) => {
      return post !== currentPost;
    });
    setPosts(filteredPosts);
  };

  return (
    <div className="post">
      {post.type === "Text" ? (
        <p>{post.content}</p>
      ) : (
        <img src={post.content} alt="" />
      )}
      <button type="button" name="delete" onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
}

export default Post;
