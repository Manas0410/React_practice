import { useEffect } from "react";

const ChildComp = () => {
  useEffect(() => {
    console.log("First time loaded");
  }, []);

  return <p>Child Comp</p>;
};

export default ChildComp;
