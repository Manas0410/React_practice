import axios from "axios";
import React from "react";
import { useState } from "react";

const EditBook = ({ item, editFlag }) => {
  const { id, author, country, language, link, page, title, year } = item;
  const [book, setBook] = useState({
    author: author,
    country: country,
    language: language,
    link: link,
    page: page,
    title: title,
    year: year,
  });
  console.log("edit", book);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setBook((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const update = async () => {
    try {
      const response = await axios.put(
        `http://68.178.162.203:8080/application-test-v1.1/books/${id}`,
        book
      );

      console.log(response.data);
      editFlag(false);
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
        placeholder={author}
      />
      <input
        type="text"
        onChange={(e) => handleInput(e)}
        name="country"
        placeholder={country}
      />
      <input
        type="text"
        onChange={(e) => handleInput(e)}
        name="language"
        placeholder={language}
      />
      <input
        type="text"
        onChange={(e) => handleInput(e)}
        name="link"
        placeholder={link}
      />
      <input
        type="text"
        onChange={(e) => handleInput(e)}
        name="page"
        placeholder={page}
      />
      <input
        type="text"
        onChange={(e) => handleInput(e)}
        name="title"
        placeholder={page}
      />
      <input
        type="text"
        onChange={(e) => handleInput(e)}
        name="year"
        placeholder="year"
      />
      <button onClick={update}>UPDATE</button>
      <button onClick={() => editFlag(false)}>❌</button>
    </div>
  );
};

export default EditBook;
