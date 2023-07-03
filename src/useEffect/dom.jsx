import { useEffect } from "react";

const DocumentTitle = () => {
  useEffect(() => {
    document.title = "Reetika | FullStack Developer";

    /*  let a = 0;
    setInterval(() => {
      a += 10;
      document.title = a;
    }, 100); */
  }, []);

  return <p>Welcome to VSS C9 Group</p>;
};

export default DocumentTitle;
