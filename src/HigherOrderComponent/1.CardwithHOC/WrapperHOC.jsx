import { BounceLoader } from "react-spinners";

const WrapperHoc = ({ isLoading, data, children }) => {
  if (isLoading) {
    return (
      <div style={{ display: "grid", placeItems: "center" }}>
        <BounceLoader color="#36d7b7" />
        <p>Please wait while we are loading your cart</p>
      </div>
    );
  }

  if (data.length === 0) {
    return <p>No data available</p>;
  }

  return children;
};
export default WrapperHoc;
