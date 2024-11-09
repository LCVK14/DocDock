const Card = () => {
  return (
    <>
        <div className="container my-2">
          <div className="row align-items-center">
            <div className="col-4 ">
              <div className="card" style={{ width: "20rem" }}>
                <img
                  src="https://placehold.co/500"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <p className="col-7 align-middle lead fs-5 text-green">
              Exercitation cillum voluptate irure ut. Esse adipisicing sunt eu
              voluptate aute ea. Do ad amet commodo non amet incididunt magna
              aliquip. Mollit sunt nisi officia voluptate. Esse esse velit
              aliquip eiusmod non elit qui amet exercitation proident elit quis
              nostrud. Ut id elit esse est fugiat aute nisi voluptate dolore ea
              sunt exercitation quis cupidatat. Exercitation minim non excepteur
              officia nostrud nostrud est sint pariatur aliqua.
              <br></br>
              <br></br>
              <button type="button" class="btn btn-secondary">Order now</button>
            </p>
          </div>
        </div>
    </>
  );
};
export default Card;
