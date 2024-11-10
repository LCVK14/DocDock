import Footer from "./Footer";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="vh-100 bg-offwhite text-center d-flex flex-column">
        <div className="flex-fill">
          <div className="display-3 py-5">We'd love to hear from you!</div>
          <p>
            If you have any concerns or questions for us, you can email us at
            the address below
          </p>
          Email: placeholder_email@protonmail.com
        </div>
        <div className="justify-self-end">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Contact;
