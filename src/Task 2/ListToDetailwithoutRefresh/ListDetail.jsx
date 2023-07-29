import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setDetails(response.data))
      .catch((error) => console.log(error));
  }, [id]);
  //blank, dependency, no dependency
  console.log(details);
  // console.log(details)
  return <div>{details.title}</div>;
};
export default Details;
