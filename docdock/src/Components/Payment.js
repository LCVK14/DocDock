import Footer from "./Footer";
import Navbar from "./Navbar";

const Payment = () => {
    return ( <>
    <Navbar></Navbar>
    <div className="bg-offwhite vh-100 text-center ">
        <h1 className="display-3 my-0 py-5">Success!</h1>
        Your medication is on its way to your location and should arrive in 2 days time.
    </div>
    <Footer></Footer>
    </> );
}
 
export default Payment;