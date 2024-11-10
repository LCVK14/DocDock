import {Link} from 'react-router-dom'

const Card = ({ image, name, desc }) => {
  return (
    <>
      <div className="container my-2 py-2">
        <div className="row align-items-center">
          <div className="col-4 ">
            <div className="card" style={{ width: "20rem" }}>
              <img src={image} className="card-img-top" alt="..." />
            </div>
          </div>
          <p className="col-7 align-middle lead fs-5 text-green">
            <h4>{name}</h4>
            <div>
              <span className="fw-normal">Active ingredient:</span>{" "}
              {desc.active_ingredient}
            </div>
            <div>
              <span className="fw-normal">Usage:</span> {desc.uses}{" "}
            </div>
            <div>
              <span className="fw-normal">Dosage:</span> {desc.dosage}{" "}
            </div>
            <br></br>
            <Link to={`/checkout/${name}/${desc.active_ingredient}/${desc.uses}/${desc.dosage}`}>
              <button type="button" class="btn bg-green text-offwhite">
                Order here
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Card;
