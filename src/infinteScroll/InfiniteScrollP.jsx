import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const InfiniteScrollP = () => {
  const bottom = useRef(null);
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts?limit=9&_page=$%7Bpage%7D"
      )
      .then((response) => setApiData(response.data));
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        axios
          .get(
            "https://jsonplaceholder.typicode.com/posts?limit=9&_page=$%7Bpage%7D"
          )
          .then((response) =>
            setApiData((prev) => [...prev, ...response.data])
          );
      }
    });
    observer.observe(bottom.current);
  }, []);

  return (
    <div>
      <div>
        <ul style={uls}>
          {apiData.map((item) => {
            const { id, userId, title, body } = item;
            return (
              <li style={box} key={id}>
                <p>{userId}</p>
                <p>{title} </p>
                <p>{body} </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div ref={bottom}></div>
    </div>
  );
};
const box = {
  border: "2px solid black",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "8px",
  width: "300px", // Add width
  height: "200px", // Add height
};

const uls = {
  display: "flex",
  gap: "18px",
  flexWrap: "wrap",
};

export default InfiniteScrollP;
