import axios from "axios";
import React, { useEffect, useState } from "react";
import AddBooks from "./AddBooks";
import EditBook from "./EditBook";
import BookCard from "./BookCard";

const BookHomeP = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalPage, setTotalPage] = useState(1);
  const [flag, seFlag] = useState(false);
  const [sortFlag, setSortFlag] = useState();
  // const [editFlag, setEditFlag] = useState(false);
  const [sort, setSort] = useState("DESC");
  const selectPage = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= totalPage) setPage(selectedPage);
  };
  useEffect(() => {
    axios
      .get(
        `http://68.178.162.203:8080/application-test-v1.1/books?page=${page}&title=${search}&DIR=${sort}`
      )
      .then((response) => {
        setData(response.data.data);
        setTotalPage(response.data.pagination.totalPages);
      });
  }, [page, search, sort]);
  console.log(data);
  //debounce function for search input field
  const debounce = (callback, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };
  const debouncedHandleChange = debounce((value) => {
    setSearch(value);
  }, 1000);
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    debouncedHandleChange(newValue);
  };
  /////////////////////////
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => handleInputChange(e)}
          placeholder="🔍 Search by title"
        />
      </div>
      <div>
        {sortFlag ? (
          <button
            onClick={() => {
              setSort("ASC");
              setSortFlag(!sortFlag);
            }}
          >
            IN ASCENDING
          </button>
        ) : (
          <button
            onClick={() => {
              setSort("DESC");
              setSortFlag(!sortFlag);
            }}
          >
            IN DESCENDING
          </button>
        )}
      </div>
      <button onClick={() => seFlag(true)}>ADD BOOK</button>
      {flag && <AddBooks flag={seFlag} />}
      {data.map((item, i) => (
        <BookCard item={item} key={item.id} />
      ))}
      {data.length > 0 && (
        <div>
          <span
            style={{
              display: "inline-block",
              padding: "8px 12px",
              margin: "0 5px",
              cursor: "pointer",
            }}
            onClick={() => selectPage(page - 1)}
          >
            ⬅️
          </span>
          {[...Array(totalPage)].map((_, i) => (
            <span
              key={i}
              onClick={() => selectPage(i + 1)}
              style={{
                display: "inline-block",
                padding: "8px 12px",
                margin: "0 5px",
                border: "1px solid #ccc",
                backgroundColor: page === i + 1 ? "cyan" : "#fff",
                color: "#333",
                cursor: "pointer",
                transition:
                  "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
              }}
            >
              {i + 1}
            </span>
          ))}
          <span
            style={{
              display: "inline-block",
              padding: "8px 12px",
              margin: "0 5px",
              cursor: "pointer",
            }}
            onClick={() => selectPage(page + 1)}
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
};

export default BookHomeP;
