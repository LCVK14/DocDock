const Card = ({image, name}) => {
  return (
    <>
        <div className="container my-2 py-2">
          <div className="row align-items-center">
            <div className="col-4 ">
              <div className="card" style={{ width: "20rem" }}>
                <img
                  src={image}
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <p className="col-7 align-middle lead fs-5 text-green">
              <h4>{name}</h4>
              Exercitation cillum voluptate irure ut. Esse adipisicing sunt eu
              voluptate aute ea. Do ad amet commodo non amet incididunt magna
              aliquip. Mollit sunt nisi officia voluptate. Esse esse velit
              aliquip eiusmod non elit qui amet exercitation proident elit quis
              nostrud. Ut id elit esse est fugiat aute nisi voluptate dolore ea
              sunt exercitation quis cupidatat. 
              <br></br>
              <button type="button" class="btn bg-green text-offwhite">Order here</button>
            </p>
          </div>
        </div>
    </>
  );
};
export default Card;
