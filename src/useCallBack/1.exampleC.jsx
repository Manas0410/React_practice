import { memo } from "react";

const ChildV22 = ({ data, onClickText }) => {
  console.log("Re-render: ", data);

  return (
    <p onClick={onClickText} style={{ backgroundColor: "tomato", padding: 12 }}>
      Data: {data}
    </p>
  );
};

const ChildV22Comp = memo(ChildV22);

export default ChildV22Comp;
