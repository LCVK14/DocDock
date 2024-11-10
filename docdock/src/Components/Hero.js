const Hero = () => {
  return (
    <div class="row p-0 pb-0 align-items-center border shadow-sm w-100 m-0 bg-light_purple">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-semibold lh-1 text-green pb-2">
          Good Health is a Click Away
        </h1>
        <p class="lead fw-normal text-secondary-emphasis pb-2">
          Docdock makes it easy to connect with trusted healthcare professionals
          online. Experience convenient, secure, and reliable virtual
          consultations whenever you need them.
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button
            type="button"
            class="btn btn-purple text-white btn-lg px-4 me-md-2 fw-bold"
          >
            Get Started Today!
          </button>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 py-2 overflow-hidden ">
        <img
          class="rounded-lg-3"
          src="https://attic.sh/vftg4nf4jbxgr35osmlbi6rh1ntx"
          alt=""
          width="500"
        />
      </div>
    </div>
  );
};

export default Hero;
