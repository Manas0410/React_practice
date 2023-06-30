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

  // console.log(details)
  return (
    <div>
      <div>
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={details.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{details.title}</h5>
                <p className="card-text">{details.description}</p>
                <p className="card-text">{details.price}</p>
                <p className="card-text">
                  <small className="text-muted">{details.category}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
