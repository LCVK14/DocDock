const Features = () => {
  return (
    <>
      <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center bg-offwhite">
        <div class="list-group w-75 bg-offwhite">
          <a
            class="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <img
              src="https://global.discourse-cdn.com/brave/optimized/3X/3/9/39db17a092c56703fb99fb2d8767fc96a461d199_2_689x408.jpeg"
              alt="twbs"
              width="32"
              height="32"
              class="rounded-circle flex-shrink-0"
            />
            <div class="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h3 class="mb-0">Frequently Asked Questions (FAQs) </h3>
              </div>
            </div>
          </a>
          <a
            class="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <img
              src="https://p7.hiclipart.com/preview/423/730/456/logo-four-diamonds-fund-symbol-form-w-4-bullet-vector.jpg"
              alt="twbs"
              width="32"
              height="32"
              class="rounded-circle flex-shrink-0"
            />
            <div class="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 class="mb-0">What is DocDock? </h6>
                <p class="mb-0 opacity-75">
                  It is an online service that helps villagers get the right
                  medications using advanced AI technology. It helps understand
                  your symptoms and suggests the best medications.
                </p>
              </div>
            </div>
          </a>
          <a
            class="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <img
              src="https://p7.hiclipart.com/preview/423/730/456/logo-four-diamonds-fund-symbol-form-w-4-bullet-vector.jpg"
              alt="twbs"
              width="32"
              height="32"
              class="rounded-circle flex-shrink-0"
            />
            <div class="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 class="mb-0">How does the AI prescription process work?</h6>
                <p class="mb-0 opacity-75">
                  You tell the AI about your symptoms and medical history. The
                  AI then analyzes this information and suggests the best
                  medications for you.{" "}
                </p>
              </div>
            </div>
          </a>
          <a
            class="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <img
              src="https://p7.hiclipart.com/preview/423/730/456/logo-four-diamonds-fund-symbol-form-w-4-bullet-vector.jpg"
              alt="twbs"
              width="32"
              height="32"
              class="rounded-circle flex-shrink-0"
            />
            <div class="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 class="mb-0">
                  What should I do if I have trouble using the website?
                </h6>
                <p class="mb-0 opacity-75">
                  If you have any problems, contact our support team. We are
                  here to help you at any time.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="container w-75 px-4 py-5" id="hanging-icons">
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphsis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 p-2 flex-shrink-0 me-3">
            &#x2713;
            </div>
            
            <div>
              <h3 class="fs-2 text-body-emphasis">Efficient diagnosis</h3>
              <p>
                Feel a little unwell? You want to feel better, but dont want to
                walk Kilometers to the nearest clinic? Just ask our AI physician
                and they can diagnosis mild conditions and refer serious ones
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 p-2 flex-shrink-0 me-3"> &#x1F48A; </div>
            <div>
              <h3 class="fs-2 text-body-emphasis">Available Medication</h3>
              <p>
                Get both, over-the-counter and prescription medication safely
                delivered to your home. No need to travel or worry about
                forgetting to get your prescription refilled.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center p-2 justify-content-center fs-4 flex-shrink-0 me-3">
            &#x1FA7A;
            </div>
            <div>
              <h3 class="fs-2 text-body-emphasis">Professional Healthcare</h3>
              <p>
                Whenever needed, we will connect you with any of our many licenced physicians.
                The same medical consultation you know, now in the palm of your hand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
