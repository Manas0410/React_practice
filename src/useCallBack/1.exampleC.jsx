import { useEffect } from "react";
import { memo } from "react";

// const ChildV22 = ({ data, onClickText }) => {
const ChildV22 = ({  onClickText }) => {
  useEffect(()=>{
    console.log("Re-render: from child ", );
  },[])
  useEffect(()=>{
    console.log("func recreated")

  },[onClickText])

  return (
    <p onClick={onClickText} style={{ backgroundColor: "tomato", padding: 12 }}>
      Data: 
    </p>
  );
};

const ChildV22Comp = memo(ChildV22);

export default ChildV22Comp;
