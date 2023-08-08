import React, { useEffect, useState, useRef } from "react";
//import "./App.css";

const Infinite = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const bottom = useRef(null);
  const delay = 10000; // time in ms

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        async function fetchMorePosts() {
          setLoading(true);
          setTimeout(() => setShowLoading(true), delay);
          const res = await fetch("https://jsonplaceholder.typicode.com/posts");
          const data = await res.json();
          setPosts((prevPosts) => [...prevPosts, ...data]);
          setLoading(false);
          setShowLoading(false);
        }
        fetchMorePosts();
      }
    });
    observer.observe(bottom.current);
  }, []);

  return (
    <div className="infinite-scroll-container">
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="post-card">
            <div className="post-card-header">
              <img className="avatar" src="path/to/avatar.jpg" alt="Avatar" />
              <div className="post-card-header-text">
                <h3 className="username">{post.username}</h3>
                <p className="post-date">{post.date}</p>
              </div>
            </div>
            <div className="post-card-body">
              <p className="post-text">{post.title}</p>
            </div>
            <div className="post-card-footer">
              <button className="like-button">Like</button>
              <button className="comment-button">Comment</button>
            </div>
          </li>
        ))}
      </ul>
      {loading && (
        <div
          className={showLoading ? "loading" : ""}
          style={{ opacity: showLoading ? 1 : 0 }}
        >
          Loading...
        </div>
      )}
      <div ref={bottom} />
    </div>
  );
};

export default Infinite;
