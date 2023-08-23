import axios from "axios";
import React, { memo, useEffect, useState } from "react";

const AddBooks = ({ flag }) => {
  const [book, setBook] = useState({
    author: "",
    country: "",
    language: "",
    link: "",
    page: "",
    title: "",
    year: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setBook((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const add = async () => {
    try {
      const response = await axios.post(
        "http://68.178.162.203:8080/application-test-v1.1/books",
        book
      );

      console.log(response.data); // Assuming the response contains the new book data
      // Clear the form after successful addition
      setBook({
        author: "",
        country: "",
        language: "",
        link: "",
        page: "",
        title: "",
        year: "",
      });

      // Notify the parent component about successful addition
      flag(false);
    } catch (error) {
      console.error("Error adding book:", error);
      // Handle error here (show error message, etc.)
    }
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => handleInput(e)}
        name="author"
        placeholder="author"
      />
      <input
        type="text"
        onChange={(e) => handleInput(e)}
        name="country"
        placeholder="country"
      />
      <input
        type="text"
        onChange={(e) => handleInput(e)}
        name="language"
        placeholder="language"
      />
      <input
        type="text"
        onChange={(e) => handleInput(e)}
        name="link"
        placeholder="link"
      />
      <input
        type="text"
        onChange={(e) => handleInput(e)}
        name="page"
        placeholder="page"
      />
      <input
        type="text"
        onChange={(e) => handleInput(e)}
        name="title"
        placeholder="title"
      />
      <input
        type="text"
        onChange={(e) => handleInput(e)}
        name="year"
        placeholder="year"
      />
      <button onClick={add}>ADD</button>
      <button
        onClick={() => {
          flag(false);
        }}
      >
        ❌
      </button>
    </div>
  );
};

export default memo(AddBooks);
