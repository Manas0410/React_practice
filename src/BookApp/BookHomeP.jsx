import axios from "axios";
import React, { useEffect, useState } from "react";
import AddBooks from "./AddBooks";
import EditBook from "./EditBook";

const BookHomeP = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [flag, seFlag] = useState(false);
  const [editFlag, setEditFlag] = useState(false);
  const selectPage = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= totalPage) setPage(selectedPage);
  };
  useEffect(() => {
    axios
      .get(
        `http://68.178.162.203:8080/application-test-v1.1/books?page=${page}`
      )
      .then((response) => {
        setData(response.data.data);
        setTotalPage(response.data.pagination.totalPages);
      });
  }, [page]);
  console.log(data);
  return (
    <div>
      <button onClick={() => seFlag(true)}>ADD BOOK</button>
      {flag && <AddBooks flag={seFlag} />}
      {data.map((item, i) => {
        return (
          <div key={i} style={{ border: "1px solid orange" }}>
            <span>Nme :{item.title}</span>{" "}
            <span>___Author:__{item.author}</span>
            <button onClick={() => setEditFlag(true)}>Edit</button>
            {editFlag && <EditBook item={item} editFlag={setEditFlag} />}
          </div>
        );
      })}
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
