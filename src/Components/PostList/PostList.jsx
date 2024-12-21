
import React from "react";
import "./PostList.css";

const PostList = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <table className="post-table">
      <thead>
        <tr>
          <th className="postId">ID</th>
          <th className="postTitle">Title</th>
          <th className="postBody">Body</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td className="postId">{post.id}</td>
            <td className="postTitle">{post.title}</td>
            <td className="postBody">{post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostList;
