import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const InfiniteScrollP = () => {
  const bottom = useRef(null);
  const [apiData, setApiData] = useState([]);
  const [page, setPage] = useState(1); //to set the page to next
  const callApi = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?limit=9&_page=${page}`)
      .then((response) => {
        setApiData((prev) => [...prev, ...response.data]);
        // setPage((prevPage) => prevPage + 1);
      });
  };
  useEffect(() => {
    callApi();
  }, [page]);
  console.log(page);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // callApi();
        setPage((prevPage) => prevPage + 1);
      }
    });
    observer.observe(bottom.current);
  }, []);
  console.log(page);

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

//(entries[0].isIntersecting) is checking whether the observed element
//(which is likely the bottom of the content) is currently visible in the viewport
