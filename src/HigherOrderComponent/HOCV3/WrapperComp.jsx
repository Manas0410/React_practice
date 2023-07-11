import { BounceLoader } from "react-spinners";

const WrapperComp = ({ loading, children }) => {
  if (loading) {
    return <BounceLoader />;
  }

  return children;
};

export default WrapperComp;
