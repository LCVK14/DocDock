import Footer from "./Footer";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { name, active, usage, dosage } = useParams();
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-offwhite h-100">
        <div className="h-75 w-75 mx-auto rounded-3 border bg-white p-5">
          <form class="needs-validation" novalidate="" action="/checkout/payment">
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="firstName" class="form-label">
                  First name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required=""
                  fdprocessedid="kanevm"
                />
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div class="col-sm-6">
                <label for="lastName" class="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder=""
                  value=""
                  required=""
                  fdprocessedid="dyn18"
                />
                <div class="invalid-feedback">Valid last name is required.</div>
              </div>

              <div class="col-12">
                <label for="email" class="form-label">
                  Email <span class="text-body-secondary">(Optional)</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="you@example.com"
                  fdprocessedid="jmxouj"
                />
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div class="col-12">
                <label for="address" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required=""
                  fdprocessedid="lkmfhy"
                />
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div class="col-12">
                <label for="address2" class="form-label">
                  Address 2 <span class="text-body-secondary">(Optional)</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                  fdprocessedid="mov7zo"
                />
              </div>

              <div class="col-md-5">
                <label for="country" class="form-label">
                  Country
                </label>
                <select
                  class="form-select"
                  id="country"
                  required=""
                  fdprocessedid="bt6q1s"
                >
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div class="col-md-4">
                <label for="state" class="form-label">
                  State
                </label>
                <select
                  class="form-select"
                  id="state"
                  required=""
                  fdprocessedid="4ryd8g"
                >
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>

              <div class="col-md-3">
                <label for="zip" class="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="zip"
                  placeholder=""
                  required=""
                  fdprocessedid="ch4g0f"
                />
                <div class="invalid-feedback">Zip code required.</div>
              </div>
            </div>

            <hr class="my-4"></hr>

            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="same-address"
              />
              <label class="form-check-label" for="same-address">
                Shipping address is the same as my billing address
              </label>
            </div>

            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="save-info" />
              <label class="form-check-label" for="save-info">
                Save this information for next time
              </label>
            </div>

            <hr class="my-4"></hr>

            <h4 class="mb-3">Payment</h4>

            <div class="my-3">
              <div class="form-check">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  class="form-check-input"
                  checked=""
                  required=""
                />
                <label class="form-check-label" for="credit">
                  Credit card
                </label>
              </div>
              <div class="form-check">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  class="form-check-input"
                  required=""
                />
                <label class="form-check-label" for="debit">
                  Debit card
                </label>
              </div>
              <div class="form-check">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  class="form-check-input"
                  required=""
                />
                <label class="form-check-label" for="paypal">
                  PayPal
                </label>
              </div>
            </div>

            <div class="row gy-3">
              <div class="col-md-6">
                <label for="cc-name" class="form-label">
                  Name on card
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-name"
                  placeholder=""
                  required=""
                  fdprocessedid="1iy2d"
                />
                <small class="text-body-secondary">
                  Full name as displayed on card
                </small>
                <div class="invalid-feedback">Name on card is required</div>
              </div>

              <div class="col-md-6">
                <label for="cc-number" class="form-label">
                  Credit card number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-number"
                  placeholder=""
                  required=""
                  fdprocessedid="0k28qd"
                />
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>

              <div class="col-md-3">
                <label for="cc-expiration" class="form-label">
                  Expiration
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-expiration"
                  placeholder=""
                  required=""
                  fdprocessedid="axslm8"
                />
                <div class="invalid-feedback">Expiration date required</div>
              </div>

              <div class="col-md-3">
                <label for="cc-cvv" class="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-cvv"
                  placeholder=""
                  required=""
                  fdprocessedid="rc85y9"
                />
                <div class="invalid-feedback">Security code required</div>
              </div>
            </div>

            <hr class="my-4"></hr>

            <button
              class="w-100 btn btn-primary btn-lg"
              type="submit"
              fdprocessedid="02noe8"
            >
              checkout
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Checkout;
