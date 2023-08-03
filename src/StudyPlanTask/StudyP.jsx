import React, { useCallback, useMemo, useState } from "react";

const StudyP = () => {
  const chapterObj = {
    history: ["h1", "h2", "h3", "h4"],
    civics: ["c1", "c2", "c3", "c4"],
    economics: ["e1", "e2", "e3", "e4"],
    arts: ["a1", "a2", "a3", "a4"],
  };
  const [subject, setSubject] = useState("");
  const chapters = useMemo(() => {
    return chapterObj[subject] || [];
  }, [subject]);
  return (
    <div>
      <button onClick={() => setSubject("history")}>HISTORY</button>
      <button onClick={() => setSubject("civics")}>CIVICS</button>
      <button onClick={() => setSubject("economics")}>ECONOMICS</button>
      <button onClick={() => setSubject("arts")}>ARTS</button>
      <br />
      <br />
      <ul>
        {chapters.map((val, index) => {
          return <li key={index}>{val}</li>;
        })}
      </ul>
    </div>
  );
};

export default StudyP;
