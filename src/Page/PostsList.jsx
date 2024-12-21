import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"; 
import PostList from "../Components/PostList/PostList";
import Pagination from "../Components/Pagination/Pagination";
import { Post } from "./PostsList.Api";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [postsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 0;

  const init = async () => {
    setLoading(true);
    try {
      const res = await Post();
      console.log(res)
      if (res) {
        setPosts(res);
      }
    } catch (err) {
      setError(`Failed to fetch posts. Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageClick = (pageNumber) => {
    setSearchParams({ page: pageNumber }); 
  };

  return (
    <div className="container">
      <h1>Posts List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <PostList posts={currentPosts} />}
      <Pagination
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageClick}
      />
    </div>
  );
};

export default PostsList;
